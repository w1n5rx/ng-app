import * as _ from '_';
// Observable DataService
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';  // <-- import Http & Headers

import { Customer }      from './model';
import { LoggerService } from './logger.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch'; // <-- add rxjs operator extensions used here
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/throw'; // <-- add rxjs Observable extensions used here

@Injectable()
export class DataService {
  private customersUrl = 'api/customers';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (
    private http: Http,  // <-- inject http
    private logger: LoggerService) { }

  /** Get existing customers as a Promise */
  getCustomersP(): Promise<Customer[]> {
    this.logger.log('Getting customers as a Promise via Http ...');

    return this.http.get(this.customersUrl) // <-- returns an observable
      .toPromise() // <-- convert immediately to a promise
      .then(response => {
        const custs = response.json().data as Customer[]; // <-- extract data from the response
        this.logger.log(`Got ${custs.length} customers`);
        return custs;
      })
      .catch((error: any) => {
        this.logger.log(`An error occurred ${error}`); // for demo purposes only
        // re-throw user-facing message
        return Promise.reject('Something bad happened with customers; please check the console');
      });
  }

  /** Get existing customers as an Observable */
  getCustomers(): Observable<Customer[]> {
    this.logger.log('Getting customers as an Observable via Http ...');

    return this.http.get(this.customersUrl)
      .map(response => response.json().data as Customer[])  // <-- extract data
      .do(custs => this.logger.log(`Got ${custs.length} customers`))
      .catch(error => this.handleError(error));
  }

  /** Update existing customer */
  update(customer: Customer): Observable<any> {
    const url = `${this.customersUrl}/${customer.id}`;
    const result = this.http.put(url, customer, { headers: this.headers })
    .do(response => this.logger.log(`Saved customer ${customer.id}`))
    .share(); // execute once no matter how many subscriptions

    // Result is "cold" which means the update won't happen until something subscribes
    // Ensure update happens even if caller doesn't subscribe
    result.subscribe( // triggers the operation, making it "hot"
    undefined, // only care about failure
    error => this.handleError(error)
    );

    return result;
  }

  /** Delete a customer */
  /** REF: https://github.com/angular/in-memory-web-api/blob/a94855b7e11ad11f852b0ac7bc0987e25635658e/src/app/http-client-hero.service.ts#L50 */
  delete (customer: Customer | number): Observable<any> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete(url, { headers: this.headers })
      .map(_ => (_ as any as Customer))
      .catch(error => this.handleError(error));
  }

  // https://github.com/angular/in-memory-web-api/blob/a94855b7e11ad11f852b0ac7bc0987e25635658e/src/app/http-client-hero.service.ts#L42
  // add (name: string): Observable<Hero> {

  /** Common Http Observable error handler */
  private handleError(error: any): Observable<any> {
    this.logger.log(`An error occurred: ${error}`); // for demo purposes only
    // re-throw user-facing message
    return Observable.throw('Something bad happened; please check the console');
  }
}

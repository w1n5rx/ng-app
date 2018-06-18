import {
  Component, ComponentFactoryResolver, Directive, ViewContainerRef
} from '@angular/core';

import { Location }       from '@angular/common';
import { Router, Routes } from '@angular/router';

import { AppComponent as appComponent }   from './customer-list/app.component';

const noRoutes: Routes = [];

// sections: section components, some of which which have routes
const sections = [
  { title: 'Customer List', component: appComponent, routes: noRoutes },
];

@Directive({selector: '[sectionView]'})
export class SectionViewDirective {
  constructor(private viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'ng-app',
  template: `
    <label>
      <select [value]="currentSectionIx" (change)="onSectionChange($event.target.selectedIndex)">
        <option *ngFor="let section of sections; let i = index" [value]="i">{{section.title}}</option>
      </select>
    </label>
    <hr>
    <div sectionView></div>`
})
export class AppComponent {

  sections = sections;
  currentSectionIx = 0;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private location: Location,
    private router: Router,
    private viewContainerRef: ViewContainerRef) {
      // Set initial view
      const resetRouterConfig = true;
      this.onSectionChange(this.currentSectionIx, resetRouterConfig);
    }

  onSectionChange(index: number, resetRouterConfig = true) {
    this.currentSectionIx = index;
    const {component, routes} = sections[index];
    this.setView(component);
    if (resetRouterConfig) {
      this.router.resetConfig(routes);
      this.location.go('/');
    }
  }

  setView(component?: { new(): any }): void {
    this.viewContainerRef.clear();

    if (component) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(component);
      this.viewContainerRef.createComponent(factory);
    }
  }
}

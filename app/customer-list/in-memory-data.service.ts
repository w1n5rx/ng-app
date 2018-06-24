import { InMemoryDbService } from 'angular-in-memory-web-api';
import { createTestCustomers } from '../customer-sample';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { customers: createTestCustomers() };
  }
}

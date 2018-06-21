// export class Customer {
//   id: number;
//   name: string;
//   address: Address;
// }

// export class Address {
//   street: string;
//   city: string;
//   state: string;
//   region: string;
// }

export class Customer {
  customerID: number;
  birthday: string;
  gender: string = 'm' || 'w';
  lastContact: Date;
  customerLifetimeValue: number;
  name: Name;
}

export class Name {
  first: string;
  last: string;
}

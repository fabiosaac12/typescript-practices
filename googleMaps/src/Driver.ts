import faker from 'faker';
import { Person } from './Person';

export class Driver extends Person {
  constructor() {
    super(faker.name.firstName(), {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    });
  }
}

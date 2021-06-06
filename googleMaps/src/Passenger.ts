import faker from 'faker';
import { Person } from './Person';

export class Passenger extends Person {
  constructor() {
    super(faker.name.firstName(), {
      lat: parseInt(faker.address.latitude()),
      lng: parseInt(faker.address.longitude()),
    });
  }
}

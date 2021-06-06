import { Passenger } from './Passenger';

export class Home implements Mappeable {
  private readonly location: {
    lat: number;
    lng: number;
  };
  public readonly name: string;

  constructor(passenger: Passenger) {
    const { lat, lng } = passenger.getLocation;

    this.location = { lat: lat + 0.0002, lng: lng + 0.0002 };
    this.name = `Casa de ${passenger.name}`
  }

  get getLocation() {
    return this.location;
  }
}

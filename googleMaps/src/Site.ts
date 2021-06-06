export class Site implements Mappeable {
  constructor(private readonly location: { lat: number; lng: number }) {}

  get getLocation() {
    return this.location;
  }
}

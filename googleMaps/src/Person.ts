export abstract class Person implements Mappeable {
  constructor(
    public readonly name: string,
    protected readonly location: {
      lat: number;
      lng: number;
    }
  ) {}

  get getLocation() {
    return this.location;
  }
}

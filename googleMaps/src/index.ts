import { Driver } from './Driver';
import { Home } from './Home';
import { Map } from './Map';
import { Passenger } from './Passenger';

const map = new Map(document.querySelector('#map')!);

const passenger = new Passenger();
const passengerHome = new Home(passenger);
const driver = new Driver();

map.addMarker(passenger);
map.addMarker(passengerHome);
map.addMarker(driver);

const button = <HTMLButtonElement>document.getElementById('button');
const input = <HTMLInputElement>document.getElementById('input');

button.addEventListener('click', () => map.searchDirection(input.value))

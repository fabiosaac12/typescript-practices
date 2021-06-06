import { Site } from './Site';

export class Map {
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;

  constructor(div: HTMLElement) {
    this.map = new google.maps.Map(div, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
    this.geocoder = new google.maps.Geocoder();
  }

  getDirection(
    mappeable: Mappeable,
    callback: (direction: string) => void
  ): void {
    this.geocoder.geocode(
      { location: mappeable.getLocation },
      (results, status) => {
        if (status === 'OK') callback(results[0].formatted_address);
        else callback('Ha ocurrido un error');
      }
    );
  }

  addMarker(mappeable: Mappeable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: mappeable.getLocation,
    });

    this.getDirection(mappeable, (direction) => {
      const infoWindows = new google.maps.InfoWindow({
        content: `La direccion ${
          mappeable.name && `de ${mappeable.name}`
        } es ${direction}`,
      });

      marker.addListener('click', () => infoWindows.open(this.map, marker));
    });
  }

  searchDirection(address: string) {
    this.geocoder.geocode({ address }, (results, status) => {
      const site = new Site({
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
      });

      if (status === 'OK') this.addMarker(site);
      else alert('Ha ocurrido un error');
    });
  }
}

interface Media {
  print(): void
}

class Movie {
  constructor(private name: string) {}

  print(): void {
    console.log(`Movie: ${this.name}`);
  }
}

class TVShow {
  constructor(private name: string) {}

  print(): void {
    console.log(`Serie: ${this.name}`);
  }
}

function printMedia<T extends Media>(arr: T[]) {
  arr.forEach((media) => media.print())
}

const movie1 = new Movie('Los Vengadores');
const movie2 = new Movie('Batman');
const serie1 = new TVShow('Breaking Bad');
const serie2 = new TVShow('Stranger Things');

printMedia([movie1, movie2, serie1, serie2])

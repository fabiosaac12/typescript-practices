type postProps = { body: string; token: string };

interface apiEndpoint {
  get(): string[];
  post(request: postProps): void;
}

const endpoints: { [key: string]: apiEndpoint } = {};

// CLASS DECORATOR
const registerEndpoint = (target: any) => {
  endpoints[`/${target.name.toLowerCase()}`] = new target();
};

const verifyToken = (token: string) => token === '123';

// METHOD DECORATOR
const protectMethod = (_: any, __: string, descriptor: PropertyDescriptor) => {
  const method = descriptor.value;

  descriptor.value = function (request: postProps) {
    verifyToken(request.token)
      ? method.call(this, request)
      : console.log('INVALID TOKEN');
  };
};

@registerEndpoint
class Families implements apiEndpoint {
  private houses = ['Lannister', 'Targaryen'];

  get() {
    return this.houses;
  }

  @protectMethod
  post(request: postProps) {
    this.houses.push(request.body);
  }
}

@registerEndpoint
class Castles implements apiEndpoint {
  private castles = ['Casa 1', 'Casa 2'];

  get() {
    return this.castles;
  }

  @protectMethod
  post(request: postProps) {
    this.castles.push(request.body);
  }
}

console.log(endpoints['/families'].get());
endpoints['/families'].post({ body: 'Bermudez', token: '123' });
console.log(endpoints['/families'].get());

console.log(endpoints['/castles'].get());
endpoints['/castles'].post({ body: 'Casa 3', token: '123' });
console.log(endpoints['/castles'].get());

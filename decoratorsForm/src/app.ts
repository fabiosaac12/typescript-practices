interface vallidationData {
  [input: string]: string[];
}

const validations: vallidationData = {};

const validator = (options: string[]) => (_: any, key: string) => {
  validations[key] = options;
  console.log(validations);
};

class Person {
  @validator(['required'])
  email: string;
  @validator(['required', 'password'])
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

const validate = (input: HTMLInputElement) => {
  const validation = validations[input.id];

  let isValid = true;
  for (let rule of validation) {
    switch (rule) {
      case 'required':
        if (!input.value) isValid = false;
      case 'password':
        if (input.value.length < 5) isValid = false;
    }
  }

  return isValid;
};

const form = document.querySelector('#form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;

  for (let input of [email, password]) {
    if (!validate(input)) return alert(`error in ${input.id}`);
  }

  const person = new Person(email.value, password.value);

  console.log(person);
});

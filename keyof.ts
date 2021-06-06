function findValue<T extends object, U extends keyof T>(object: T, key: U) {
  return object[key];
}

findValue({
  name: 'Fabio',
  lastName: 'BM',
  job: 'Programmer'
}, 'job')


export default class API {
  constructor(name) {
    this.name = name
  }

  run() {
    return this.name + '!'
  }

  static staticRun() {
    return 'hi! (static)';
  }
}

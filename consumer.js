import API from './api';

const instance = new API();

export default class Consumer {
  static callMethod() {
    return instance.run();
  }

  static callStaticMethod() {
    return API.staticRun();
  }
}

import consumer from './consumer';
import API from './api';

/* TRY ONE */
jest.mock('./api', () => {
  return jest.fn().mockImplementation(() => {
    return { default: class {
      static staticRun() {
        return 'a mocked static method'
      }

      run() {
        return 'a mocked method';
      }
    }};
  });
});

/* TRY TWO */
// jest.mock('./api', () => {
//   return jest.fn().mockImplementation(() => {
//     return {default: {
//       staticRun: () => 'a mocked static method',
//       run: () => 'a mocked method'
//     }};
//   });
// });

/* TRY THREE */
/* this approach fails because I don't have a constructor*/
// jest.mock('./api', () => ({
//   staticRun: () => 'a mocked static method',
//   run: () => 'a mocked method'
// }));

test('regular methods can be mocked', () => {
  expect(consumer.callMethod()).toBe('a mocked method');
});

test('static methods can be mocked', () => {
  expect(consumer.callStaticMethod()).toBe('a mocked static method');
});

// test('it works without mocking', () => {
//   expect(consumer.callMethod()).toBe('a regular method');
// });

// test('it works without mocking', () => {
//   expect(consumer.callStaticMethod()).toBe('a static method');
// });

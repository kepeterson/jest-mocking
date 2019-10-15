import consumer from './consumer';

jest.mock('./api', () => {
  return jest.fn().mockImplementation(() => {
    return { default: class {
      static staticRun() {
        return ('hello!')
      }

      run() {
        return 'a mocked value';
      }
    }};
  });
});

test('it works without mocking', () => {
  expect(consumer.callMethod()).toBe('a mocked value');
});

test('it works without mocking', () => {
  expect(consumer.callStaticMethod()).toBe('hello!');
});

// test('it works without mocking', () => {
//   expect(consumer.callMethod()).toBe('hi!');
// });

// test('it works without mocking', () => {
//   expect(consumer.callStaticMethod()).toBe('hi! (static)');
// });

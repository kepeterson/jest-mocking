import API from './api';

test('it works', () => {
  const a = new API('hi');
  expect(a.run()).toBe('hi!')
})

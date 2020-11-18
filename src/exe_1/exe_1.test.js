const { expect } = require('@jest/globals');
const { runBatches, tasks } = require('./exe_1');

test('pool_size should be greater than 0', () => {
  runBatches(tasks, 0).then(result => expect(result).toBe('pool_size should be greater than 0'))
});

test('tasks should have at least 1 element', () => {
  runBatches([], 2).then(result => expect(result).toBe('tasks cannot be empty'))
});

test('Tasks parameter should be an Array', () => {
  runBatches({name: "Alfredo"}, 2).then(result => expect(result).toBe('tasks should be an Array'))
});

test('runBatches should return an array equal to tasks.length', () => {
  runBatches(tasks, 2).then(result => expect(result.length).toBe(tasks.length))
});

test('The array should contain the values or reasons for each of the promises', () => {
  runBatches(tasks.slice(0,3), 2).then(result => expect(result.length).toBe([{value: 1}, {value:2}, {error: 'error'}]))
});

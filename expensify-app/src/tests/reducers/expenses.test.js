import expensesReducers from '../../reducers/expenses';

test('should set default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
})
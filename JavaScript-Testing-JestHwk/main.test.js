const { sum } = require("./main");
const { isNumber } = require("./main");
const { createObject } = require("./main");
const {getErrorMessage} = require("./main")
const {addShoppingListItem} = require("./main")

// addShoppingListItem tests
test(`Milk has been added to the shopping list`, () =>{
  expect(addShoppingListItem('Milk')).toContain('Milk')
})


// getErrorMessage tests
test(`The error message for 404 is not found`, () =>{
  expect(getErrorMessage(404)).toMatch("Not found")
})

test(`The error message for 500 is NOT not found`, () =>{
  expect(getErrorMessage(500)).not.toBe()
})


// creatObject tests
test(`createObject(1, 2) returns { one: 1, two: 2 }`, () => {
  expect(createObject(1, 2)).toStrictEqual({ one: 1, two: 2 });
});

test(`Calling createObject with one or more string values returns undefined`, () =>{
  expect(createObject('example1', 'example2')).toBeUndefined()
})

test(`Calling createObject with numbers returns an object with the "one" key`, () =>{
  expect(createObject(3,4)).toHaveProperty("one", 3)
})
  
 // isNumber tests
test(`14 is a number`, () => {
    expect(isNumber(14)).toBeTruthy();
  });

  test(`"John1" is not a number`, () => {
    expect(isNumber('John1')).toBeFalsy();
  })

  test(`"John1" is not a number`, () =>{
    expect(isNumber('John1')).not.toBe()
  })

// sum test
  test(`Adding 1 + 1 equals 2`, () => {
    expect(sum(1, 1)).toBe(2);
  });

  test('Adding 2 numbers that are > than 3', () =>{
    expect(sum(7,8)).toBeGreaterThan(3)
  })

  test('Adding 2 numbers that are >= 4', () => {
    expect(sum(1,2)).toBeLessThanOrEqual(4)
  })

  test('Adding 2 + 2 does not result in number > 5', () =>{
    expect(sum(2,2)).not.toBe(5)
  })

  test('Adding 0.1 + 0.2 = 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
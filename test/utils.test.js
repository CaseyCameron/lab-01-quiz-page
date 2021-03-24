// IMPORT MODULES under test here:
import { isYes } from '../utils.js';

const test = QUnit.test;

test('return true if string starts with a y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes is true');
    expect.equal(isYes('yep'), true, 'yep returns true');
    expect.equal(isYes('no'), false, 'no returns false');
});

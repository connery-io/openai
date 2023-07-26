const SampleAction = require('../actions/SampleAction');

// NOTE: You don't need to test whether the input parameters are provided and valid. 
// Connery Runner will handle that based on your action definition.
// So you only need to test the logic of your action here.

it('should add 1 + 2 to equal 3', async () => {
    // arrange
    const inputParameters = {
        Number1: "1",
        Number2: "2"
    };

    // act
    const result = await SampleAction.operation.handler({ inputParameters });

    // assert
    expect(result.Sum).toBe(3);
});

it('should add 0 + 0 to equal 0', async () => {
    // arrange
    const inputParameters = {
        Number1: "0",
        Number2: "0"
    };

    // act
    const result = await SampleAction.operation.handler({ inputParameters });

    // assert
    expect(result.Sum).toBe(0);
});

it('should add -1 + 1 to equal 0', async () => {
    // arrange
    const inputParameters = {
        Number1: "-1",
        Number2: "1"
    };

    // act
    const result = await SampleAction.operation.handler({ inputParameters });

    // assert
    expect(result.Sum).toBe(0);
});

it('should add 50.1 + 49.9 to equal 100', async () => {
    // arrange
    const inputParameters = {
        Number1: "50.1",
        Number2: "49.9"
    };

    // act
    const result = await SampleAction.operation.handler({ inputParameters });

    // assert
    expect(result.Sum).toBe(100);
});

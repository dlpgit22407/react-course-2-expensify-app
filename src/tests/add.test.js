const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test("should add two numbers", () => {
    const result = add(3, 4);

    expect(result).toBe(7)

    if (result !== 7) {
        throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`);
    }
});

test("Name should be Dennis", () => {
    const result = generateGreeting("Dennis");

    expect(result).toBe("Hello Dennis!")

    if (result !== "Hello Dennis!") {
        throw new Error(`Your not Dennis. The result was ${result}. Expect "Dennis"`);
    }
})

test("Name should be nothing", () => {
    const result = generateGreeting();

    expect(result).toBe("Hello Anonymous!")

    if (result !== "Hello Anonymous!") {
        throw new Error(`Your not Dennis. The result was ${result}. Expect "Dennis"`);
    }
})

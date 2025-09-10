import fizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("debería retornar el mismo número si no es múltiplo de 3 ni de 5", () => {
    expect(fizzBuzz(1)).toBe(1);
  });
  it("debería retornar 'Fizz' si el número es múltiplo de 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });
});

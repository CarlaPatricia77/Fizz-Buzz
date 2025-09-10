import fizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("debería retornar el mismo número si no es múltiplo de 3 ni de 5", () => {
    expect(fizzBuzz(1)).toBe(1);
  });
});

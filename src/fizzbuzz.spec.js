import generarFizzBuzz from "./fizzbuzz.js";

describe("Fizzbazz", () => {
    it("generar el mismo numero si no sigue ninguna regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
    });

    it("generar el mismo numero para cualquier numero que sigue ninguna regla", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
    });

});


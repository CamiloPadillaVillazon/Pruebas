import generarFizzBuzz from "./fizzbuzz.js";

describe("Fizzbazz", () => {
    it("generar el mismo numero si no sigue ninguna regla", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
    });

    it("generar el mismo numero para cualquier numero que sigue ninguna regla", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
    });

    it("generar el Fizz para el 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });

    it("generar el Fizz para multiplos de 3", () => {
        expect(generarFizzBuzz(30)).toEqual("Fizz");
    });

    it("generar el Fizz para el 5", () => {
        expect(generarFizzBuzz(5)).toEqual("Fizz");
    });

    it("generar el Fizz para multiplos de 5", () => {
        expect(generarFizzBuzz(15)).toEqual("Fizz");
    });

    it("generar el Fizz para el 15", () => {
        expect(generarFizzBuzz(15)).toEqual("Fizz");
    });

    it("generar el Fizz para multiplos de 3 y 5", () => {
        expect(generarFizzBuzz(15)).toEqual("Fizz");
    });


});


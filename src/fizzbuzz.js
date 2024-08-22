function generarFizzBuzz(num){
    if(num === 3 || num === 5){
        return "Fizz"
    }

    if(num%3 === 0){
        return "Fizz"
    }

    return num+"";

}

export default generarFizzBuzz;
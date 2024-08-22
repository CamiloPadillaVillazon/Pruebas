function generarFizzBuzz(num){
    if(num === 3 || num === 5){
        return "Fizz"
    }

    if(num%3 === 0 || num%5 === 0){
        return "Fizz"
    }

    if(num === 15){
        return "Fizz"
    }

    if(num === 3 && num === 5){
        return "Fizz"
    }

    
    for(i=0; i<num; i++)
    {
        console.log(num)
    }

    return num+"";

}

export default generarFizzBuzz;

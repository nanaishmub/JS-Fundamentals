const argument = process.argv;

function factorial(a = parseInt(argument[2])){
    let fact = 1;
    let result;
    if (isNaN(a)){
        console.log(1);
    }else {
        for (let i=1; i <= a; i++){
            fact = fact * i;
            result = fact; 

        }
        console.log(result);
    };   
}


factorial();


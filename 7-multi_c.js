const argument = process.argv;
let x = argument[2];

if (x === undefined){
    console.log("Missing number of occurences");
} else{
    for (let i = 0; i < x; i++){
        console.log("C is fun");
};
};

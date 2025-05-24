const argument = process.argv;

function add(a = parseInt(argument[2]), b = parseInt(argument[3])){
console.log(a + b);
}


add();
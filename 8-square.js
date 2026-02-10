const argument = process.argv;

rows = parseInt(argument[2]);
cols = parseInt(argument[2]);

if (isNaN(rows) && isNaN(cols)){
    console.log("Missing size")
} else {
for (let i = 1; i <= rows; i++) {
    let sqr = "";
    for (let j = 1; j <= cols; j++){
        sqr += "X";
    }
    console.log(sqr);
    };
};
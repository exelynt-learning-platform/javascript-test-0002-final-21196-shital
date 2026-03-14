let rows = 5;
 
for (let i = 0; i < rows; i++) {
 
    let line = "";
 
    for (let s = 0; s < i; s++) {
        line += " ";
    }
 
    line += "1 ";
 
    if (i === 0) {
        line += "4 6 4 1";
    } else if (i === 1) {
        line += "3 3 1";
    } else if (i === 2) {
        line += "2 1";
    } else if (i === 3) {
        line += "1";
    }
 
    console.log(line);
}

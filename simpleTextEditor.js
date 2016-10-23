function processData(input) {
    //Enter your code here
    let lines = input.split('\n');
    let q = parseInt(lines[0]);
    let result = "";
    let undo = [];
    for (let i = 1; i < q + 1; i++) {
        let tuple = lines[i].split(' ');
        console.log(tuple);
        let op = parseInt(tuple[0]);
        main(result, undo, op, tuple);
    }
}

function main(result, undo, op, tuple) {
    switch (op) {
        case 1:
            result = result.concat(tuple[1]);
            undo.push([]);
            break;
        case 2:
            undo.push(result.slice(result.legnth - parseInt(tuple[1]), parseInt(tuple[1])));
            break;
        case 3:
            console.log(parseInt(tuple[1]) - 1);
            console.log(result);
            console.log(result.charAt(parseInt(tuple[1]) - 1));
            break;
        case 4:
            result = undo.pop();
            break;

    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

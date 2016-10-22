// N: Length of array
// Q: Number of Queries or Operation
// ex: 1 append(a) -> 1 a
// ex: 2 delete(k) -> 2 k
// ex: 3 print() -> 3

function processData(input) {
  let lines = input.split('\n');
  // if there is Array
  let n = parseInt(lines[0]);
  let arr = lines[1].split(' ');
  arr = arr.map(Number);
  // if there is Operation -> tuple
  let q = parseInt(lines[0]);
  for (let i = 1; i < q + 1; i++) {
    let tuple = lines[i].split(' ');
    let op = parseInt(tuple[0]);
    switch (op) {
      case 1:
        //do somthing with parseInt(tuple[1]);
        break;
      case 2:
        //do somthing with parseInt(tuple[1]);
        break;
      case 3:
        //do somthing with parseInt(tuple[1]);
        break;
      case 4:
        //do somthing with parseInt(tuple[1]);
        break;
    }
  }
}

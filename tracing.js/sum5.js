let a = 20;
let b = 0;

for (let i = 0; i < 5; i++) {
    if (a % 2 === 0) {
        b = a >> 1;
    } else {
        b = a << 1;
    }
    a = a - 3;
}

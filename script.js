function getTringleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return 'nieprawidłowa wartość';
    } else {
        return a*h/2;
    }
}

let tringle1Area = getTringleArea(8,6);
let tringle2Area = getTringleArea(-2, 3);
let tringle3Area = getTringleArea(7, -2);

console.log(tringle1Area);
console.log(tringle2Area);
console.log(tringle3Area);
Number.prototype.powerFive = function (n) {
    this.n = n;
    return this.n ** 5;
};

let number = 1;
console.log(number.powerFive(3));

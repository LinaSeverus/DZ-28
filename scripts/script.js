'use strict';

let calculator = {

    read() {
        this.a = +prompt(`Введите первое число`);
        this.b = +prompt(`Введите второе число`);
        if (isNaN(this.a) || isNaN(this.b)) alert(`Error - число не введено!`);

        console.log(typeof this.a, this.a, typeof this.b, this.b);
        console.log(this);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }

};

calculator.read();
alert(`Cумма: ${calculator.sum()}`);
alert(`Умножение: ${calculator.mul()}`);


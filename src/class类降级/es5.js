function Product(name, unitPrice, number) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.number = number;
    Product.count++;
}

Product.count = 0;

Product.prototype = {
    get totalPrice() {
        return this.number * this.unitPrice;
    },
};

Product.prototype.increase = function () {
    this.number++;
};

const drink = new Product('雪碧', 3, 10);

drink.increase();

console.log(drink.totalPrice);

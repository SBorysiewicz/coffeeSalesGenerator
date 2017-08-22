const maxSales = 8000;
const minSales = 1000;
const minVariance = 100;
const maxVariance = 250;

export default class CoffeeShop {
    constructor(name, suburb, state, incentive) {
        this.name = name;
        this.suburb = suburb;
        this.state = state;
        this.incentive = incentive;
        this.averageSales = Math.ceil(Math.random() * (maxSales - minSales) + minSales);
    }

    monthlySales() {
        let salesVariance = Math.ceil(Math.random() * (maxVariance - minVariance) + minVariance);
        salesVariance = salesVariance * (Math.random() < 0.5 ? -1 : 1);
        console.log("averageSales: " + this.averageSales + " ,salesVariance: " + salesVariance);
        return this.averageSales + salesVariance;
    };

    monthlyOwnCups(sales) {
        const factor = this.incentive ? 0.1 : 0.02;
        const cupsMin = sales * 0.5 * factor;
        const cupsMax = sales * factor;
        return Math.ceil(Math.random() * (cupsMax - cupsMin) + cupsMin);
    };
} 
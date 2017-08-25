const maxSales = 8000;
const minSales = 1000;
const minVariance = 100;
const maxVariance = 250;
const noIncentiveFactor = 0.1;
const incentiveFactor = 0.02;
const growthFactorInitial = 0.1;
const grouwthFactorIncrease = 0.01;

export default class CoffeeShop {
    constructor(name, suburb, state, incentive) {
        this.name = name;
        this.suburb = suburb;
        this.state = state;
        this.incentive = incentive;
        this.averageSales = Math.ceil(Math.random() * (maxSales - minSales) + minSales);
        this.growthFactor = growthFactorInitial;
    }

    monthlySales() {
        let salesVariance = Math.ceil(Math.random() * (maxVariance - minVariance) + minVariance);
        salesVariance = salesVariance * (Math.random() < 0.5 ? -1 : 1);
        console.log("averageSales: " + this.averageSales + " ,salesVariance: " + salesVariance);
        return this.averageSales + salesVariance;
    };

    monthlyOwnCups(sales) {
        const factor = this.incentive ? noIncentiveFactor : incentiveFactor;
        const cupsMin = sales * 0.5 * factor * this.growthFactor;
        const cupsMax = sales * factor * this.growthFactor;
        this.growthFactor = this.growthFactor + grouwthFactorIncrease;

        return Math.ceil(Math.random() * (cupsMax - cupsMin) + cupsMin);
    };
} 
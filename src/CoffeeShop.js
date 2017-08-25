const maxSales = 8000;
const minSales = 1000;
const minVariance = 100;
const maxVariance = 250;
const noIncentiveFactor = 0.1;
const incentiveFactor = 0.02;
const growthFactorInitial = 0.1;
const growthFactorIncrease = 0.02;

export default class CoffeeShop {
    constructor(name, suburb, state, incentive) {
        this.name = name;
        this.suburb = suburb;
        this.state = state;
        this.incentive = incentive;
        this.averageSales = Math.ceil(Math.random() * (maxSales - minSales) + minSales);
        this.growthFactor = growthFactorInitial;
        this.growthFactorIncrease = growthFactorIncrease;
    }

    monthlySales() {
        let salesVariance = Math.ceil(Math.random() * (maxVariance - minVariance) + minVariance);
        salesVariance = salesVariance * (Math.random() < 0.5 ? -1 : 1);
        return this.averageSales + salesVariance;
    };

    monthlyOwnCups(sales) {
        const factor = this.incentive ? noIncentiveFactor : incentiveFactor;
        const cupsMin = sales * 0.5 * factor * this.growthFactor;
        const cupsMax = sales * factor * this.growthFactor;
        this.growthFactor = this.growthFactor + this.growthFactorIncrease;

        const byoCups = Math.ceil(Math.random() * (cupsMax - cupsMin) + cupsMin);
        console.log('state: ' + this.state + ', growthFactor: ' + this.growthFactor + ' BYO cups: ' + byoCups);
        return byoCups;
    };
} 
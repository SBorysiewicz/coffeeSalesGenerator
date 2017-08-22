import coffeeShopList from './CoffeeShopList';
import CoffeeShop from './CoffeeShop';

const maxSales = 8000;
const minSales = 1000;

const shops = () => {

    const coffeeShops = [];
    for (let state in coffeeShopList) {
        coffeeShopList[state].forEach((coffeeShop) =>{
            let shop = new CoffeeShop(coffeeShop.name, coffeeShop.suburb, state, coffeeShop.incentive);
            coffeeShops.push(shop);
        });
    };

    return coffeeShops;
};

const buildShop = (name, suburb, state, incentive) => {

    const averageSales = Math.ceil(Math.random() * (maxSales - minSales) + minSales);
    return {
        'name': name,
        'suburb': suburb,
        'state': state,
        'incentive': incentive ? 'y' : 'n',
        'monthlySales': () => {
            let salesVariance = Math.ceil(Math.random() * (averageSales - (averageSales * 0.01)) + averageSales * 0.01) 
            * (Math.random() < 0.5 ? -1 : 1);
            console.log("averageSales: " + averageSales + " ,salesVariance: " + salesVariance);
            return averageSales + salesVariance;
        },
        'monthlyOwnCups': (sales) => {
            const factor = incentive ? 0.1 : 0.02;
            const cupsMin = sales * 0.5 * factor;
            const cupsMax = sales * factor;
            return Math.ceil(Math.random() * (cupsMax - cupsMin) + cupsMin);
        }
    }
};

export default shops;
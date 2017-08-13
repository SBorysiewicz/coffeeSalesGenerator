import coffeeShopList from './CoffeeShopList';

const maxSales = 8000;
const minSales = 1000;

const shops = () => {

    const coffeeShops = [];
    for (let state in coffeeShopList) {
        coffeeShopList[state].forEach((coffeeShop) =>{
            coffeeShops.push(buildShop(coffeeShop.name, coffeeShop.suburb, state, coffeeShop.incentive));
        });
    };

    return coffeeShops;
};

const buildShop = (name, suburb, state, incentive) => {
    return {
        'name': name,
        'suburb': suburb,
        'state': state,
        'incentive': incentive ? 'y' : 'n',
        'monthlySales': () => {
            return Math.ceil(Math.random() * (maxSales - minSales) + minSales);
        },
        'monthlyOwnCups': () => {
            const factor = incentive ? 0.1 : 0.02;
            const cupsMin = minSales * factor;
            const cupsMax = maxSales * factor;
            return Math.ceil(Math.random() * (cupsMax - cupsMin) + cupsMin);
        }
    }
};

export default shops;
import coffeeShopList from './CoffeeShopList';
import CoffeeShop from './CoffeeShop';

const maxSales = 8000;
const minSales = 1000;

const shops = () => {

    const coffeeShops = [];
    for (let state in coffeeShopList) {
        coffeeShopList[state].forEach((coffeeShop) =>{
            let shop = new CoffeeShop(coffeeShop.name, coffeeShop.suburb, state, coffeeShop.incentive);

            //https://github.com/SBorysiewicz/coffeeSalesGenerator/issues/1
            //Make growth more prominant in WA
            if(state === 'WA') {
                shop.growthFactor = shop.growthFactor * 3;
                shop.growthFactorIncrease = shop.growthFactorIncrease * 3;
            }
            coffeeShops.push(shop);
        });
    };

    return coffeeShops;
};

export default shops;
const shops = () => {
    return [
        buildShop('Mikes Coffee', 'Keilor', 'Victoria', false, 1300, 3400),
        buildShop('Coffee Pot', 'Armadale', 'Western Australia', false, 900, 2300),
        buildShop('Coffee Snobs', 'Melbourne', 'Victoria', true, 900, 2300),
        buildShop('Charlottes cafe', 'Sydney', 'New South Wales', true, 2500, 5000),
        buildShop('Cafe Zoes', 'Melbourne', 'Victoria', true, 6000, 8000),
        buildShop('Cafe Adams', 'Melbourne', 'Victoria', true, 8000,9000),
    ];
};

const buildShop = (name, suburb, state, incentive, min, max) => {
    return {
        'name': name,
        'suburb': suburb,
        'state': state,
        'incentive': incentive ? 'y' : 'n',
        'monthlySales': () => {
            return Math.ceil(Math.random() * (max - min) + min);
        },
        'monthlyOwnCups': () => {
            const factor = incentive ? 0.1 : 0.02;
            const cupsMin = min * factor;
            const cupsMax = max * factor;
            return Math.ceil(Math.random() * (cupsMax - cupsMin) + cupsMin);
        }
    }
};

export default shops;
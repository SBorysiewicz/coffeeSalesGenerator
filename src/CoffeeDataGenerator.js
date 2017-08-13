import DataFile from './DataFile';
import moment from 'moment';
import shops from './CoffeeShops';

class CoffeeDataGenerator {

    constructor(path) {
        this.dataFile = new DataFile(path);
        this.shops = shops();
        console.log('Up and running');
    }

    generateFile(fromDateStr, toDateStr) {
        let dateCounter = moment(fromDateStr, 'DD-MM-YYYY');
        const toDate = moment(toDateStr, 'DD-MM-YYYY');
        console.log('dates:' + fromDateStr + ' ' + toDateStr);
        console.log('Generating from: ' + dateCounter.format() + ' to ' + toDate.format()); 
        do {
            this.writeMonthlyValues(dateCounter.format('MMMM'), dateCounter.format('YYYY'));
            dateCounter = dateCounter.add(1, 'month');
        } while (!dateCounter.isSameOrAfter(toDate));
    }

    writeMonthlyValues(month, year) {
        this.shops.forEach((shop) => {
            this.dataFile.writeLine(shop.name + ', '
            + shop.incentive + ', ' 
            + shop.suburb + ', '
            + shop.state + ', '
            + month + ', ' 
            + year + ', '
            + shop.monthlySales() + ', '
            + shop.monthlyOwnCups() + ', '
            + '\n'
        );
        });
    }

}
export default CoffeeDataGenerator;
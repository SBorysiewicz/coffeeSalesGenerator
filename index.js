import CoffeeDataGenerator from './src/CoffeeDataGenerator'

const generator = new CoffeeDataGenerator('./output/');
generator.generateFile('01-01-2015', '31-12-2016');
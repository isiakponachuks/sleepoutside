import ExternalServices from './ExternalServices.js';
import ProductList from './productList.js';

import { loadHeaderFooter, getParam } from './utils.js';

loadHeaderFooter();

const category = getParam('category');

// create an instance of our externalservices class

const dataSource = new ExternalServices();

// element to be render in

const listElement = document.querySelector('.product-list');

const mylist = new ProductList(category, dataSource, listElement);

mylist.init();
import ProductData from './productData.js';
import ProductList from './productList.js';

import { loadHeaderFooter, getParam } from './utils.js';

loadHeaderFooter();

const category = getParam('category');

// create an instance of our productdata class

const dataSource = new ProductData();

// element to be render in

const listElement = document.querySelector('.product-list');

const mylist = new ProductList(category, dataSource, listElement);

mylist.init();
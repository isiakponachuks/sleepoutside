import ProductData from './productData';
import ProductList from './productList.js';
import { loadHeaderFooter } from './utils';

loadHeaderFooter();

const dataSource = new ProductData ('tents');

const listElement = document.querySelector('.product-list');

const myList = new ProductList('tents', dataSource, listElement);

myList.init();

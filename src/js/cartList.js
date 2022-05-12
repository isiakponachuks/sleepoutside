import { renderListWithTemplate, getLocalStorage } from './utils.js';

export default class CartList{
    constructor (key, listElement){
        this.key = key;
        this.listElement = listElement;
    }

    async init(){
        const list = getLocalStorage(this.key);
        this.renderList(list);
    }

    prepareTemplate(template, product){
        template.querySelector('.cart-card_image img').src = product.image;
        template.querySelector('.cart-card_image img').alt += product.Name;
        template.querySelector('.cart_name').textContent = product.Name;
        template.querySelector('.cart-card_color').textContent = product.Colors[0].ColorName;
        template.querySelector('.cart-card_price').textContent += product.FinalPrice;

        return template;
    }

    renderList(list){

        this.listElement.innerHTML = ' ';

        const template = document.getElementById('cart-card-template');
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    }


}
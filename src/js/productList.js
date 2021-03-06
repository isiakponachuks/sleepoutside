import { renderListWithTemplate } from './utils.js';



export default class ProductList {
    constructor (category, dataSource, listElement){

        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;



    }
    async init (){
        const list = await this.dataSource.getData(this.category);
        console.log(list);
        this.renderList(list);

        document.querySelector('.title').innerHTML = this.category;
        
    }

    prepareTemplate(template, product) {

        template.querySelector('a').href += product.Id;
        template.querySelector('img').src = product.Image;
        template.querySelector('img').alt += product.Name;
        template.querySelector('.card_brand').textContent = product.Brand.Name;
        template.querySelector('.card_name').textContent = product.NameWithoutBrand;
        template.querySelector('.product-card_price').textContent += product.FinalPrice;

        return template;
    }

    renderList(list){
        this.listElement.innerHTML = '';
        const template = document.getElementById('product-card-template');
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    }
       // list.forEach(product => {
           // const clone = template.content.cloneNode(true);
            //const hydratedTemplate = this.prepareTemplate (clone, product);

           // this.listElement.appendChild(hydratedTemplate);
            
       // });
    }
    




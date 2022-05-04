function convertToJason(res){
    if (res.ok){
        return res.json();

    } else {
        throw new Error('Bad Response');
    }
}

export default class ProductData {
    constructor(category) {
        this.category = category;
        this.path = `../jason/${this.category}.jason`;


    }

getData() {
    return fetch(this.path)
    .then(convertToJason).then((data) => data);

}
async findProductById(id){
    const products = await this.getData()
    return products.find ((item) => item.id === id);


}
}

class ProductManager {

    static id = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        ProductManager.id++;
        const codeValidation = productCode => productCode.code === code;
        if (this.products.some(codeValidation)) {
            return console.log('El producto ya existe');
        } else if (!title || title.trim() === '' || !description || description.trim() === '' || price === null || price === undefined || price === '' || !code || code.trim() === '' || stock === null || stock === undefined || stock === '') {
            return console.log('Todos los campos son obligatorios');
        } else {
            this.products.push({id: ProductManager.id, title, description, price, thumbnail, code, stock});
            return ProductManager.id;
        }
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    getProductById(id){
        if (this.products.find(findId => findId === this.products[id - 1])){
            console.log(this.products[id - 1])
            return this.products[id - 1];
        } else {
            console.log("No se encontro el ID");
            return 'No se encontro el ID';
        }
    }
}


const producto = new ProductManager();

producto.addProduct("Procesador", 'R7 5700X', 350000, "https://www.fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-7-5700x-svideo-scooler-0.jpg", "R7-5", 20);
producto.addProduct("RTX 4090", 'RTX 4090 Asus Rog Strix', 1500000, "https://spacegamer.com.ar/img/Public/1058/55986-producto-1.jpg", "RTX4090-A", 10);
producto.addProduct("Monitor", 'Aorus CV27F', 7500, "https://cdn.mos.cms.futurecdn.net/WZhmwyBrt6LtrBzCdeyBuG.jpg", "CV27F", 5);
producto.addProduct("Notebook", 'Acer Predator Helios 300', 3000000, "https://i.ytimg.com/vi/GC-xa9pl6Ao/maxresdefault.jpg", "APH300", 5);

producto.getProducts();
producto.getProductById(4);
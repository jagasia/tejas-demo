import axios from 'axios';
class ProductService
{
    URL='http://localhost:5000/product'

    fnAddProduct(product)
    {
        return axios.post(this.URL,product);
    }

    fnGetAllProducts()
    {
        return axios.get(this.URL);
    }
}
export default new ProductService
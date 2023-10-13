import { Component } from "react";
import ProductService from "../Services/ProductService";

export class ProductGrid extends Component {
    constructor() {
        super()
        this.state = { products: [] }
    }

    componentDidMount() {
        ProductService.fnGetAllProducts()
            .then((response) => {
                // alert(JSON.stringify(response.data))
                this.setState({ products: response.data })
                console.log(this.state.products)
            })
            .catch((response) => {
                alert("Error:" + JSON.stringify(response.data))
            })
    }

    render() {
        return <div>
            {this.state.products.length}
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Picture</th><th></th>
                    </tr>
                </thead>
                <tbody>

                    {

                        this.state.products.map((p) =>
                            <tr>
                                <td>{p.id}</td><td>{p.name}</td><td>{p.price}</td>
                                <td>
                                    <img src={p.picture} width="50" />
                                </td><td></td>
                            </tr>
    )}

                </tbody>
            </table>
        </div>
    }
}
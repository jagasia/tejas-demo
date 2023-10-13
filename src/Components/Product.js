import { Component } from "react";
import ProductService from "../Services/ProductService";

export class Product extends Component{

    constructor()
    {
        super()
        this.state={"id":'',"name":'',"price":'','picture':''}
        this.imageChangeHander=this.imageChangeHander.bind(this)
        this.fnAdd=this.fnAdd.bind(this)
    }

    readFileDataAsBase64(e) {
        const file = e.target.files[0];
    
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (event) => {
                resolve(event.target.result);
            };
    
            reader.onerror = (err) => {
                reject(err);
            };
    
            reader.readAsDataURL(file);
        });
    }

    imageChangeHander(event)
    {
        this.readFileDataAsBase64(event).then((data)=>{
            this.setState({picture:data});
        
        })
    }

    fnAdd()
    {
        console.log("sending:");
        console.log(this.state);

        ProductService.fnAddProduct(this.state)
        .then((response)=>{
            alert("Success:"+JSON.stringify(response.data))
            window.location.reload(false)
        })
        .catch((response)=>{
            alert("Error:"+JSON.stringify(response.data))
        })
    }


    render(){
        return <div>
            Id:<input type="number" name="id" className="form-control" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} />
            Name:<input type="text" name="name" className="form-control" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} />
            Price:<input type="number" name="price" className="form-control" onChange={(event)=>this.setState({[event.target.name]:event.target.value})} />
            Picture:<input type="file" name="picture" className="form-control" onChange={this.imageChangeHander} />
            
            {/* <img src={this.state.picture} width={'400'} /> */}
            <br/>
            <input type="button" className="btn btn-info" value={'Add'}   onClick={this.fnAdd}  />
            <br/>
            {   this.state.id } <br/>
            {   this.state.name } <br/>
            {   this.state.price } <br/>
            {   this.state.picture } <br/>
        </div>
    }
}
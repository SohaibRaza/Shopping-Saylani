import React, { Component } from 'react'
import axios from 'axios'
import Products from './Products'

class ProductShowCase extends Component {
    state = { 
        products: [],
        cart: [],
        totalItems: 0,
        totalAmount: 0,
        term: "",
        category: "",
        cartBounce: false,
        quantity: 1,
        quickViewProduct: {},
        modalActive: false
    }  

    jjk=()=>{

    }
    handleSearch=(event) =>{
        this.setState({ term: event.target.value });
    }
    // Mobile Search Reset
    handleMobileSearch=()=> {
        this.setState({ term: "" });
    }
    // Filter by Category
    handleCategory=(event)=> {
        this.setState({ category: event.target.value });
        console.log(this.state.category);
    }
    // Add to Cart
    handleAddToCart=(selectedProducts)=> {
        let cartItem = this.state.cart;
        let productID = selectedProducts.id;
        let productQty = selectedProducts.quantity;
        if (this.checkProduct(productID)) {
        console.log("hi");
        let index = cartItem.findIndex(x => x.id == productID);
        cartItem[index].quantity =
            Number(cartItem[index].quantity) + Number(productQty);
        this.setState({
            cart: cartItem
        });
        } else {
        cartItem.push(selectedProducts);
        }
        this.setState({
        cart: cartItem,
        cartBounce: true
        });
        setTimeout(
        function() {
            this.setState({
            cartBounce: false,
            quantity: 1
            });
            console.log(this.state.quantity);
            console.log(this.state.cart);
        }.bind(this),
        1000
        );
        this.sumTotalItems(this.state.cart);
        this.sumTotalAmount(this.state.cart);
    }
    handleRemoveProduct=(id, e)=> {
        let cart = this.state.cart;
        let index = cart.findIndex(x => x.id == id);
        cart.splice(index, 1);
        this.setState({
        cart: cart
        });
        this.sumTotalItems(this.state.cart);
        this.sumTotalAmount(this.state.cart);
        e.preventDefault();
    }
    checkProduct=(productID)=> {
        let cart = this.state.cart;
        return cart.some(function(item) {
        return item.id === productID;
        });
    }
    sumTotalItems=() =>{
        let total = 0;
        let cart = this.state.cart;
        total = cart.length;
        this.setState({
        totalItems: total
        });
    }
    sumTotalAmount=()=> {
        let total = 0;
        let cart = this.state.cart;
        for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * parseInt(cart[i].quantity);
        }
        this.setState({
        totalAmount: total
        });
    }

    //Reset Quantity
    updateQuantity=(qty)=> {
        console.log("quantity added...");
        this.setState({
        quantity: qty
        });
    }
    // Open Modal
    openModal=(product)=> {
        this.setState({
        quickViewProduct: product,
        modalActive: true
        });
    }
    // Close Modal
    closeModal=() =>{
        this.setState({
        modalActive: false
        });
    }
    getProducts=()=> {
    let url =
        "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
        axios.get(url).then(response => {
        this.setState({
            products: response.data
        });
        });
    }
    componentWillMount() {
        this.getProducts();
    }
    render() { 
        return (
            <Products
            productsList={this.state.products}
            searchTerm={this.state.term}
            addToCart={this.handleAddToCart}
            productQuantity={this.state.quantity}
            updateQuantity={this.updateQuantity}
            openModal={this.openModal}
            />
        );
    }
}

export default ProductShowCase;
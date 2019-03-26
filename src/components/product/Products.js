import React, { Component } from "react";
import Product from "./product";
import LoadingProducts from "./loadProduts";
//import NoResults from "../empty-states/NoResults";
//import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class Products extends Component {

    render() {
        let productsData;
        let term = this.props.searchTerm;
        let x;

        function searchingFor(term) {
            return function(x) {
                return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
            };
        }
        productsData = this.props.productsList
            .filter(searchingFor(term))
            .map(product => {
                return (
                    <Product
                    key={product.id}
                    price={product.price}
                    name={product.name}
                    image={product.image}
                    id={product.id}
                    addToCart={this.props.addToCart}
                    productQuantity={this.props.productQuantity}
                    updateQuantity={this.props.updateQuantity}
                    openModal={this.props.openModal}
                    />
                );
            });

        // Empty and Loading States
        let view;
        if (productsData.length <= 0 && !term) {
            view = <LoadingProducts />;
        } 
        else if (productsData.length <= 0 && term) {
            
        } 
        else {
            view = (
                {productsData}
            );
        }
        return <div className="products-wrapper">{view}</div>;
    }
}

export default Products;

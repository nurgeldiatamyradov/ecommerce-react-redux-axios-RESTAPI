import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((products)=> {
        const {id, title, price, category, image} = products
        return (
            <div className="four wide" key={id}>
                <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card ">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content ">
                        <div className="meta price">${price}</div>
                        <div className="meta">{category}</div>

                        
                       <div className="header">{title}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        )
    })
    return <>{renderList}</>

    
}

export default ProductComponent;
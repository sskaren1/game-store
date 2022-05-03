//Importing Hooks
import { useState, useEffect, useContext } from "react";
// Importing Context
import { UserContext } from "../context/UserContext";
//Importing data
import productDb from "./../assets/data/db";
// Importing Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash
} from "@fortawesome/free-solid-svg-icons";
//Importing styles
import "./../styles/components/products.scss";

const Products = () => {
  const { basket, storeBasket, deleteElementFromBasket } =
    useContext(UserContext);

  const ButtonForProduct = ({ product }) => {
    const findProduct = basket.find((bas) => bas.id === product.id);

    return (
      <>
        {findProduct ? (
          <button onClick={() => deleteElementFromBasket(product.id)}>
            <FontAwesomeIcon
              icon={faTrash}
              style={{ color: "rgb(229, 57, 53)" }}
            />
          </button>
        ) : (
          <button onClick={() => storeBasket(product)} className="btn--add font-bold">+ Add to Basket</button>
        )}
      </>
    );
  };

  return (
    <section className="productStore">
      <div className="productStore__container">
        {productDb.products.length > 0 &&
          productDb.products.map((product, index) => (
            <div className="card" key={index}>
              <div className="card__container">
                <div className="card__photo">
                  <img src={product.image} alt="product" />
                </div>
                <div className="card__description">
                  <h4 className="name">{product.name}</h4>
                  <div className="prices">
                    <span className="price">${product.price}</span>
                    <span className="price-tacched">
                      ${product.priceTacched}
                    </span>
                    <ButtonForProduct product={product} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;

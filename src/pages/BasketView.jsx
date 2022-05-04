//Importing Hooks
import { useState, useEffect, useContext } from "react";
// Importing Context
import { UserContext } from "../context/UserContext";
// Importing Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faTrash,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
// Importing images
import emptyCart from "./../assets/image/empty_cart.svg";
//Importing styles
import "./../styles/pages/basketView.scss";

const basketView = () => {
  const {
    basket,
    setBasket,
    addOrRemoveProduct,
    deleteElementFromBasket,
    deleteAllElementFromBasket,
  } = useContext(UserContext);

  const [total, setTotal] = useState(0);
  const calculatePrice = () => {
    let sum = 0;
    basket.forEach((product) => {
      const finalPrice = +product.amount * +product.price;
      sum += finalPrice;
    });
    setTotal(sum.toFixed(2));
  };

  const handlePayment = () => {
    swal({
      title: "Pago Realizado",
      text: "Se pagó correctamente",
      icon: "success",
      confirmButtonText: "Ok",
    }).then((result) => {
      const products = basket;
      while (products.length > 0) products.pop();
      setBasket(products);
      localStorage.setItem("basket", JSON.stringify(basket));
      window.location.href = "https://game-store-ks.vercel.app/basket-view";

      // localStorage.removeItem("basket");
      // setBasket([]);
      // localStorage.setItem("basket", JSON.stringify([basket]));
    });
  };

  const handlePurchase = () => {
    // Redirect
    window.location.href = "https://game-store-ks.vercel.app/product-store";
  };

  useEffect(() => {
    calculatePrice();
  }, [basket]);

  return (
    <div className="shoppingCart">
      {basket.length == 0 && (
        <div className="container mx-auto text-center">
          <h3 className="mb-10 text-6xl text-amber-500">Carrito Vacío</h3>
          <p className="text-center mb-32 text-3xl">
            Su carrito se encuentra vacío
          </p>
          <img src={emptyCart} alt="empty-cart" className="w-1/3 mb-20" />
          <button
            className="p-5 bg-amber-500 rounded-lg text-3xl"
            onClick={handlePurchase}
          >
            Empezar a Comprar
          </button>
        </div>
      )}

      {basket.length > 0 && (
        <div className="shoppingCart__container grid grid-cols-3 gap-10 md:gap-5">
          <div className="basket col-span-3 md:col-span-2">
            <div className="basket__container">
              <h3 className="mb-10">Bolsa de Compras</h3>
              <div className="basket__table text-center">
                <table className="table-fixed border-solid border-b-4 border-black ">
                  <thead className="border-solid border-b-4 border-black">
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basket.length > 0 &&
                      basket.map((product, index) => (
                        <tr
                          className="border-solid border-b border-black"
                          key={index}
                        >
                          <td>
                            <img
                              style={{ objectFit: "contain" }}
                              width={150}
                              height={150}
                              src={product.image}
                              alt="producto"
                            />
                          </td>
                          <td>
                            Sony DualSense Wireless Controller for PlayStation 5
                          </td>
                          <td>
                            <p className="price-tacched">
                              ${product.priceTacched}
                            </p>
                            <p className="price">${product.price}</p>
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                addOrRemoveProduct(product.id, false)
                              }
                            >
                              <FontAwesomeIcon
                                icon={faCircleMinus}
                                style={{ color: "rgb(251, 140, 0)" }}
                              />
                            </button>
                            <span>{product.amount}</span>
                            <button
                              onClick={() =>
                                addOrRemoveProduct(product.id, true)
                              }
                            >
                              <FontAwesomeIcon
                                icon={faCirclePlus}
                                style={{ color: "rgb(251, 140, 0)" }}
                              />
                            </button>
                            <button
                              onClick={() =>
                                deleteElementFromBasket(product.id)
                              }
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                style={{ color: "rgb(229, 57, 53)" }}
                              />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <button
                  className="mt-10 p-5 bg-amber-500 rounded-lg text-3xl"
                  onClick={deleteAllElementFromBasket}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>
          <div className="summary col-span-3 md:col-span-1 ">
            <h3 className="mb-10">Resumen de tu orden</h3>
            <div className="flex justify-around flex-wrap">
              <span className="mb-5">Coste total de los articulos:</span>
              <span className="ml-5 font-bold mb-10">$ {total}</span>
            </div>
            <button
              onClick={() => handlePayment()}
              className="btn--payment mx-auto"
            >
              Realizar Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default basketView;

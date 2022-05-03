// Importing UserContext, hooks
import { createContext, useState } from "react";
// Importing SweetAlert
import swal from "sweetalert";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) ?? []
  );

  const storeBasket = (product) => {
    setBasket([...basket, product]);
    localStorage.setItem("basket", JSON.stringify([...basket, product]));
  };

  const deleteAllElementFromBasket = () => {
    swal({
      title: 'Esta seguro de eliminar los items?',
      text: "No podrás revertirlo!",
      icon: 'warning',
      buttons:["No","Si"],
    }).then((result) => {
      if (result) {
        swal({
          title:'Items eliminados',
          text:'Los items han sido borrados',
          icon:'success',
        })
        const products = basket;
        products.length = 0;
        setBasket(products);
        localStorage.setItem("basket", JSON.stringify(basket)); 
        window.location.href = "/basket-view";
      }
    });
  }

  const deleteElementFromBasket = (id) => {  
    swal({
      title: 'Esta seguro de eliminarlo?',
      text: "No podrás revertirlo!",
      icon: 'warning',
      buttons:["No","Si"],
    }).then((result) => {
      if (result) {
        swal({
          title:'Item eliminado',
          text:'El item ha sido borrado',
          icon:'success',
        })
        const products = basket.filter((bas) => bas.id !== id);
        setBasket(products);
        localStorage.setItem("basket", JSON.stringify(products));           
      }
    });
  };

  const addOrRemoveProduct = (id, add) => {
    const products = basket.map((product) => {
      if (product.id === id) {
        if (add) {
          product.amount += 1;
        } else {
          if (product.amount > 1) {
            product.amount -= 1;
          }
        }
      }
      return {
        ...product,
      };
    });
    setBasket(products);
    localStorage.setItem("basket", JSON.stringify(products));
  };

  return (
    <UserContext.Provider
      value={{
        basket,
        setBasket,
        storeBasket,
        deleteAllElementFromBasket,
        deleteElementFromBasket,
        addOrRemoveProduct,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/Currencyformat/CurrencyFormat";

import { DataContext } from "../../DataProvider/DataProvider";
import classes from "./Cart.module.css";
import { type } from "../../Utilty/ActionType";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

const Cart = () => {
  const { state, dispatch } = useContext(DataContext); // Destructure dispatch
  const { basket = [], user } = state || {};

  const total = basket.reduce(
    (amount, item) => amount + (item.price || 0) * (item.amount || 1),
    0
  );

  const increment = (item) => {
    dispatch({
      type: type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello {user?.email || "Guest"}</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket.map((item, index) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                    key={item.id || index}
                    product={item}
                    RenderAdd={false}
                    RenderDesc={true}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket.length > 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">
                <small>This order contains a gift</small>
              </label>
            </span>

            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;

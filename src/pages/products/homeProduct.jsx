import React from "react";
import ProductList from "./productList";
import CartPage from "./cart/cartItems";
import OrderFormProduct from "./payment/payment";

import ProductBuy from "./buyProduct/buyProduct";

function HomeProduct() {
  return (
    <div className="">
      {/* <ProductBuy /> */}
      <ProductList />
      {/* <OrderFormProduct /> */}
      {/* <CartPage /> */}
    </div>
  );
}

export default HomeProduct;

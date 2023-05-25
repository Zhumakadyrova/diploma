import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderForm/OrderForm";
import "./Cart.css";

export default function Cart() {
  return(
    <div className="Cart">
      <h2>Cart</h2>
      <CartList/>
      <OrderForm/>
    </div>
  )
}
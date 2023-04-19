import CartList from "../components/CartList/CartList";
import "./Cart.css";

export default function Cart() {
  return(
    <div className="Cart">
      <h1>Cart</h1>
      <CartList/>
    </div>
  )
}
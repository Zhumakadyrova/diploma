import OrderList from "../components/OrderList/OrderList";
import "./Orders.css"

export default function Orders(){
  return(
    <div className="Orders">
      <h2>Orders</h2>
      <OrderList/>
    </div>
  )
}
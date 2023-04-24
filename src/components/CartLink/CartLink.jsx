import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartLink.css"

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        {<span className="CartLink-total">{total}</span>}
        <img src="https://images.freeimages.com/images/previews/759/blue-website-buttons-2-2-1145509.jpg" className="Cart-pht"/>
      </Link>
    </div>
  );
}

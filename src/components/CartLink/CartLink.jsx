import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartLink.css";
import cartPhoto from "../../assets/pages_photo/cart-image.png";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <Link to="/cart">
        {<span className="CartLink-total">{total}</span>}
        <img src={cartPhoto} className="Cart-pctr" />
      </Link>
    </div>
  );
}

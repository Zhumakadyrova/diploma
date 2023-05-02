import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";
import  clip from "../../assets/video/video.mp4";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <CartLink />
        <Auth />
       
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>
        <div className="main-content">
          {props.children}
        </div>
        <video className="video" autoPlay="autoplay" loop muted>
          <source src={clip} type='video/mp4' />
        </video>
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

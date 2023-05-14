import Auth from "../Auth/Auth";
import CartLink from "../CartLink/CartLink";
import CategoryList from "../CategoryList/CategoryList";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Layout.css";
import  clip from "../../assets/video/video.mp4";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <div>
          <CartLink />
          <Auth />
        </div>
        
       
      </header>
      <div></div>
      <aside>
        <CategoryList />
      </aside>
      <main>
        <div className="main-content">
        <video className="video" autoPlay="autoplay" loop muted width="100%">
          <source src={clip} type='video/mp4' />
        </video>
        </div>
        {props.children}
        {/* {Example} */}
      </main>
      <footer>
        <div className="Footer_link">
          <h3>Links</h3>
          <Nav/>
        </div>
        <div className="footer_contacts">
          <h3>Contact us</h3>
          <p>zhumakadyrova9@gmail.com</p>
          <p>+996550197557</p>
        </div>
      </footer>
    </div>
  );
}

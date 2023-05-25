
import "./Drawer1.css";

let menuBtn = document.querySelectorAll('.Category a')
let menu = document.querySelector('.Drawer')
menuBtn.forEach(el => {
    el.addEventListener('click', function(){
        menu.classList.remove('open')
    })
})
function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;
  
  return (
    <div className={drawerClassNames}> 
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Drawer;
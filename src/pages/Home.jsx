import "./Home.css";
// import  clip from "./travel-background.mp4";
export default function Home() {
  return (
    <div className="Home">
      <div className="content">
        {/* <video autoPlay="autoplay" loop muted>
        <source src={clip} type='travel' />
        </video> */}
        <h1>Welcome to my Ice-Cream shop</h1>
        <p>This is my awesome Ice-Cream shop.</p>
        <p>We only use natural ingredients to make our yummy ice-creams</p>
      </div>
    </div>
  );
}

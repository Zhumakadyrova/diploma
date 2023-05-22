import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Footer.css";
import footer_image from "../../assets/pages_photo/footer_img.jpg";
import s_media_instagram from "../../assets/contacts_icons/instagram.jpg";
import s_media_facebook from "../../assets/contacts_icons/facebook.jpg";
import s_media_tiktok from "../../assets/contacts_icons/tiktok.jpg";
import s_media_whatsapp from "../../assets/contacts_icons/whatsapp.jpg"

export default function Footer(Footer) {
  return (
    <div className="Footer">
      <div className="Footer_link">
        <div className="Logo">
          <Logo />
        </div>
        <div className="Footer_nav">
          <h3>Links</h3>
          <Nav />
        </div>
        <div className="Footer_news">
          <h3>Latest news</h3>
          <div className="Footer_card">
            <div className="Footer_card_1">
              <div className="Card_text">
                Lorem ipsum dolor sit amet 
                Blanditiis, id officiis. <br />
                <span>19.06.2023</span>
              </div>
              <div className="Card_image">
                <img src={footer_image} alt="" />
              </div>
            </div>
            <div className="Footer_card_1">
              <div className="Card_text">
                Lorem ipsum dolor sit
                Blanditiis, id officiis. <br />
                <span>19.06.2023</span>
              </div>
              <div className="Card_image">
                <img src={footer_image} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_contacts">
          <h3>Contact us</h3>
          <a href="mailto:zhumakadyrova7@gmail.com" target="_blank">zhumakadyrova7@gmail.com</a> <br />
          <a href="tel:+996550197557" target="_blank">+996550197557</a>
        </div>
      </div>
      <div className="Footer_bottom">
        <ul>
          <li>
            <a href="https://instagram.com/zhumakadyrova_nagima?igshid=MzRlODBiNWFlZA==" target="_blank">
              <img src={s_media_instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100041208312759&mibextid=LQQJ4d" target="_blank">
              <img src={s_media_facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="tiktok.com" target="_blank">
              <img src={s_media_tiktok} alt="" />
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/" target="_blank">
              <img src={s_media_whatsapp} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

import { FaInstagram, FaPhone, FaWhatsapp, FaYoutube } from "react-icons/fa";
import socialStyle from "./sidewidget.module.css"
const SocialWidget = () => {
    return ( 
        <div className={`${socialStyle.wrap} ${socialStyle.onHome}`}>
           <a href="https://www.instagram.com/shyam_the_world_of_physics?utm_source=qr&igsh=MXVnamNtMnEwZ3cwYg==" className={socialStyle.link}>
          <span className={socialStyle.span}>
          <FaInstagram />
          </span>
        </a>
        <a rel="noreferrer" href="https://youtube.com/@SHYAMTHEWORLDOFPHYSICSSTWP?feature=shared" target="_blank" className={socialStyle.link}>
          <span className={socialStyle.span}>
            <FaYoutube />
          </span>
        </a>
        <a rel="noreferrer" href="https://wa.me/+919993005825" target="_blank" className={socialStyle.link}>
          <span className={socialStyle.span}>
            <FaWhatsapp />
          </span>
        </a>
        <a rel="noreferrer" href="tel:7314020339" className={socialStyle.link}>
          <span className={socialStyle.span}>
            <FaPhone />
          </span>
        </a>
      </div>
     );
}
 
export default SocialWidget;
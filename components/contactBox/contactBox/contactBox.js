import Link from "next/link";
import styles from "./contactBox.module.css"
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
const ContactBox = ()=>{
    const router = useRouter()
    return(
        <div className={`body-wrapper ${styles.wrapper}`}>
            <div className={styles.contactBoxSection}>
                <h3 style={{marginTop:0}} className="subHeading">Contact Us for more information</h3>
                <p style={{color:"white"}} className="content">Have questions or ready to start your project? Contact us today for personalized assistance and expert guidance. We&apos;re here to help you turn your vision into reality.</p>
                <p style={{color:"white"}} className="content"><strong>Email: stwp2205@gmail.com</strong></p>
                <div>
                <Link href="tel:7314020339"><button>Call Us +91 7314020339</button></Link>
                </div>

            </div>
            <div className={styles.contactBoxSection}>
                {/* <p><strong>OR CLASS US NOW ON</strong></p><br></br> */}
                <div className="body-wrapper">
                    <div className={styles.icons} onClick={()=>{
            window.open("https://www.instagram.com/shyam_the_world_of_physics?utm_source=qr&igsh=MXVnamNtMnEwZ3cwYg==", '_blank');
        }}>
                        <FaInstagram />
                    </div>
                    <div onClick={()=>{
            window.open("https://youtube.com/@SHYAMTHEWORLDOFPHYSICSSTWP?feature=shared", '_blank');
        }} className={styles.icons}>
                        <FaYoutube />
                    </div>
                    <div onClick={()=>{
            window.open("https://wa.me/+9199930005825", '_blank');
        }} className={styles.icons}>
                        <FaWhatsapp />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactBox;
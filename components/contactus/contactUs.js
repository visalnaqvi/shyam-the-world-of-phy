import ContactCard from "../cards/contactcard/ContactCard.js";
import Map from "../map/map.js";
import styles from "./contact.module.css"
const ContactUs = () => {
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            
            <div className={styles.content}>
                <p className={styles.heading}>LETS GET IN TOUCH</p>
                <p className={styles.text}>Have questions? We&apos;re here to help. Reach out to us today and let&apos;s discuss your project needs together</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        <h2 className="subHeading center">Contact Infinite Web Solutions</h2>
        <p className="content margin center">Please don&apos;t hesitate to contact us by phone or by using the form below. We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing.</p>

        <br></br>
        <div className="body-wrapper">
        <button className="primary-btn blue">Request a callback</button>
        </div>
        <br></br>
        <br></br>
        <div className={`${styles.cardholder} flex-class wrap`} style={{width:"100%", flexWrap:"wrap"}}>
            <ContactCard heading="Timmings" line1="Monday - Saturday" line2="10 A.M. to 7 A.M."></ContactCard>
            <ContactCard heading="Address" line1="18B Navratan Bagh," line2="Karnatwat Pan Center Ke Upar, Near Sant Paul School Geeta Bhawan, Indore"></ContactCard>
            <ContactCard heading="Contact" line1="+9107314020339"></ContactCard>
        </div>
        <br></br>
        <br></br>
        {/* <Map></Map> */}
      
    </> );
}
 
export default ContactUs;

import ContactCard from "../cards/contactcard/ContactCard.js";
import styles from "./aboveFooter.module.css"
const AboveFooter = ()=>{
    return (
        <div><h2 className="subHeading center">Contact Shyam The World of Physics</h2>
        <p className="content center">Please don&apos;t hesitate to contact us by phone or by using the form below. We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing.</p>
       
       <br></br>
       <br></br>
        <div className={`${styles.cardholder} body-wrapper`} style={{width:"100%", flexWrap:"wrap"}}>
            <ContactCard heading="Timmings" line1="Monday - Saturday" line2="10 A.M. to 7 A.M."></ContactCard>
            <ContactCard heading="Address" line1="18B Navratan Bagh," line2="Karnatwat Pan Center Ke Upar, Near Sant Paul School Geeta Bhawan, Indore"></ContactCard>
            <ContactCard heading="Contact" line1="+917314020339" line2="+919993005825"></ContactCard>
        </div>
        </div>
    )
}

export default AboveFooter;
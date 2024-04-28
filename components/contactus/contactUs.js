import styles from "./contact.module.css"
const ContactUs = () => {
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            
            <div className={styles.content}>
                <p className={styles.heading}>LETS GET IN TOUCH</p>
                <p className={styles.text}>Have questions? We&apos;re here to help. Reach out to us today and let&apos;s discuss your doubts together</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        
      
    </> );
}
 
export default ContactUs;
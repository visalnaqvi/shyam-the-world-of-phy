import style from "./contactcard.module.css"
const ContactCard = ({heading, line1 , line2}) => {
    return (
          
            <div className={style.contactcard}>
                <p className={style.heading}>{heading}</p>
                <p className={style.text}>{ line1 }</p>
                <p className={style.text}>{line2}</p>
            </div>
           

     );
}
 
export default ContactCard;
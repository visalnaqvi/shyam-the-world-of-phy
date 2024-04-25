import Image from "next/image"
import styles from "./cardGallary.module.css"

const CardGallary = ({awards})=>{
    return(
        <>
        <h2 className={styles.heading} >Achievements & Accolades: Celebrating Director Neelesh Kumar Gupta&apos;s Journey</h2>
        <div className="body-wrapper justify-between">
        {
            awards.map((award,i)=>(
                <div key={i} className={`${styles.card} body-wrapper column`}>
                    <div className={styles.imgWrapper}>
                    <div className={styles.back}></div>

                    <Image objectFit="cover" fill src={award.img} alt={award.text} />
                    </div>
                    
                        <p className={styles.text}>{award.text}</p>
                   
                </div>
            ))
        }
      </div>
      </>
    )
}

export default CardGallary
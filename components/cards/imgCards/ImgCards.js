import Image from "next/image"
import styles from "./ImgCards.module.css"
import { useWindowSize } from "@uidotdev/usehooks";

const CardGallary = ({awards})=>{
    const size = useWindowSize();
    return(
        <>
        <h2 className={styles.heading} >Achievements & Accolades: Celebrating Director Neelesh Kumar Gupta&apos;s Journey</h2>
        <div className="body-wrapper justify-between">
        {
            awards.map((award,i)=>(
               
                    

       <div key={i} className={styles.wrap}>
      <Image
      
        src={award}
        width={0}
        height={0}
        alt="Picture of the author"
        sizes="100vw"
        style={{
            width:"100%",
            height:"auto",
            marginBottom:"20px",
            borderRadius:"10px",
            boxShadow:"10px 10px 30px #00000070"
        }}
      />
  
              </div>                          
                    
                   
           
            ))
        }
      </div>
      </>
    )
}

export default CardGallary
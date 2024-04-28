import Image from 'next/image';
import styles from './imageCard.module.css'
import { useWindowSize } from "@uidotdev/usehooks";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const ImageCard = ({data})=>{
    const router = useRouter();
    const size = useWindowSize();
    return(
        <div className={`body-wrapper ${styles.wrapper}`} style={{flexDirection:data.direction[0]}}>
             
                {size.width != null && size.width < 550 ? <Image objectFit='cotain' src={data.img} width={size.width} height={250} alt='visa' />:
                <Image objectFit='cotain' src={data.img} width={550} height={380} alt='visa' />
                }
            
            <div className={`${styles.imageCardSection} ${styles.content}`}>
                <h2 style={{marginTop:'0'}}className='subHeading'>{data.heading}</h2>
              {!data.column1 ?  <p className='content'>{data.content}</p>
               : <div className={`${styles.column} body-wrapper justify-start items-start`}>
                    <div>
                        {
                            data.column1.map((line , i)=>(
                                <div key={i} className='body-wrapper justify-start'>
                                    <span className={styles.icon}><FaCheckCircle /></span>
                                    <p className={styles.line}>{line}</p></div>
                            ))
                        }
                    </div>
                    <div className={styles.marginLeft}>
                        {
                            data.column2.map((line , i)=>(
                                <div key={i} className='body-wrapper justify-start'>
                                    <span className={styles.icon}><FaCheckCircle /></span>
                                    <p className={styles.line}>{line}</p></div>
                            ))
                        }
                    </div>
                </div>}

                {
                    data.button && <><br></br><buttton onClick={()=>{router.push("/login")}} className="primary-btn blue">{data.button}</buttton></>
                }
            </div>
        </div>
    );
}


export default ImageCard;
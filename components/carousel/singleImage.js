import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation.js"

const SingleImage = ({url})=>{
    const size = useWindowSize();
    const router = useRouter()

    return(
      <>{ size.width>615? <Image  className="backgroundImg" width={0}
        height={0}
        sizes="100vw"
        src={url[0]}
        style={{ width: '100%', height: 'auto' }} alt="home" />:
        <Image  className="backgroundImg" width={0}
        height={0}
        sizes="100vw"
        src={url[1]}
        style={{ width: '100%', height: 'auto' }} alt="home" />
       }</>
    //    <>{size.width && <div className="backgroundImgWrapper">
    //         {size.width>615 ? 
    //         :<Image className="backgroundImg" width={800} height={350} style={{objectFit: "contain" , objectPosition:"top"}} src={url[1]} alt="home" />}
    //         </div>   }  </>     
    )
}

export default SingleImage
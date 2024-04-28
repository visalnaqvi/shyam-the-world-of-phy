import Image from "next/image";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation.js"

const SingleImage = ({url})=>{
    const size = useWindowSize();
    const router = useRouter()

    return(
       <>{size.width && <div className="backgroundImgWrapper">
            {size.width>615 ? <Image  className="backgroundImg" fill={false} height={450} style={{objectFit: "cover" , objectPosition:"left"}} src={url[0]} alt="home" />
            :<Image className="backgroundImg" width={800} height={350} style={{objectFit: "contain" , objectPosition:"top"}} src={url[1]} alt="home" />}
            </div>   }  </>     
    )
}

export default SingleImage
import styles from "./recentProjects.module.css"

import one from "../../public/courses/1.png"
import two from "../../public/courses/2.png"
import three from "../../public/courses/3.png"
import four from "../../public/courses/4.png"
import five from "../../public/courses/5.png"
import six from "../../public/courses/6.png"
import seven from "../../public/courses/7.png"
import eight from "../../public/courses/8.png"
import nine from "../../public/courses/9.png"

import onemb from "../../public/coursesmb/1.png"
import twomb from "../../public/coursesmb/2.png"
import threemb from "../../public/coursesmb/3.png"
import fourmb from "../../public/coursesmb/4.png"
import fivemb from "../../public/coursesmb/5.png"
import sixmb from "../../public/coursesmb/6.png"
import sevenmb from "../../public/coursesmb/7.png"
import eightmb from "../../public/coursesmb/8.png"
import ninemb from "../../public/coursesmb/9.png"

import Image from "next/image.js";
import { useState } from "react";
import AboveFooter from "../aboveFooter/aboverFooter"

const InteriorProjects = () => {

    const [isOnline , setIsOnline] = useState(false)
    const [active , setActive] = useState("offline")

    const imagesOffline = [one , two , three , four , five , six , seven , eight , nine]
    const imagesOnline = [onemb , twomb , threemb , fourmb , fivemb , sixmb , sevenmb , eightmb , ninemb]
    
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            
            <div className={styles.content}>
                <p className={styles.heading}>Our Courses</p>
                <p className={styles.text}>Empowering Minds, Elevating Potential: Explore Our Comprehensive Courses for Academic Excellence and Beyond.</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        <div className="margin">
        <h2 className="subHeading center">Our Courses</h2>
        <div className={`${styles.tabWrapper} body-wrapper`}>
            <div id="offline" onClick={()=>{
                setIsOnline(false)
                setActive("offline")
            }} className={`${styles.tab} ${active=="offline" && styles.active}`}>Offline Courses</div>
            <div onClick={()=>{
                setIsOnline(true)
                setActive("online")
                }} className={`${styles.tab} ${active=="online" && styles.active}`}>Online Courses</div>
        </div>
       <div className={`${styles.imgwrapper} body-wrapper`}>
        {
            !isOnline ? imagesOffline.map((img , i)=>(
                <div key={i} className={styles.img}><Image style={{borderRadius:"10px" , boxShadow:"10px 10px 20px #00000040" , width:"100%" , height:"auto"}} src={img} alt="course" height={0} width={0} sizes="100vw"/></div>
            )) : imagesOnline.map((img , i)=>(
                <div key={i} className={styles.img}><Image style={{borderRadius:"10px" , boxShadow:"10px 10px 20px #00000040" , width:"100%" , height:"auto"}} src={img} alt="course" height={0} width={0} sizes="100vw"/></div>
            ))
        }
        </div>
        </div>
    </> );
}
 
export default InteriorProjects;
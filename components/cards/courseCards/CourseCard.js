import { useState } from "react";
import styles from "./CourseCard.module.css"

const CourseCard = ({courses})=>{
    const [state , setState] = useState(true)
    return (
      <div> {
      courses.map((c , i)=>(
        <div key={i}>
            <div className={styles.header}>
                <h2 className={styles.heading}>{c.name}</h2>
                <p className={styles.tag}>{state ? "Offline" : "Online"}</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.footer}>
            <h4></h4>
            <ul>
                <li>
                    <div></div>
                    <p></p>
                </li>
                <li>
                    <div></div>
                    <p></p>
                </li>
                <li>
                    <div></div>
                    <p></p>
                </li>
                <li>
                    <div></div>
                    <p></p>
                </li>
            </ul>
            </div>
            <div>
                <button>{c.price}</button>
                <button>Call Us Now</button>
            </div>
        </div>
      ))
      }
        </div>
    )
}

export default CourseCard;
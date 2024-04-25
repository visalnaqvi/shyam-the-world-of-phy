import styles from "./testimonials.module.css"
import TestimonialCard from "../cards/testimonialCard/testimonialCard";

const Testimonials = ({testi})=>{
    return(
        <div>
        <h2 className="subHeading center">What does our students say?</h2>
        <br></br>
          <div className="body-wrapper">
            <div className={styles.column}>
            <video controls style={{margin:"auto"}}  width={"100%"} height={600} >
          <source src="../gallary/test_video.mp4" type="video/mp4"/>
      </video>
              </div>
            <div  className={styles.column}>
              {
                testi.map((d,i)=>(
                  <TestimonialCard key={i} data={d} />
                ))
              }
              </div>
          </div>
        </div>
    )
}

export default Testimonials;
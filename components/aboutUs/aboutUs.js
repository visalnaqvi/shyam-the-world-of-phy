import Stats from "../stats/stats.js";
import styles from "./aboutUs.module.css"
const AboutUs = () => {
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            <div className={styles.content}>
                <p className={styles.heading}>About Us</p>
                <p className={styles.text}>Fueling Curiosity, Inspiring Achievement: Your Pathway to Success Starts Here.</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        <Stats />

        <div className="margin">
        <h2 className="subHeading">Shyam The World of Physics</h2>
        <p className="content">
        Welcome to Shyam The World of Physics, your premier destination for comprehensive coaching in JEE, NEET, and other competitive exams. Led by Director Neelesh Kumar Gupta, our institute is committed to nurturing the next generation of science enthusiasts and achievers. With a meticulously crafted curriculum covering all subjects, expert guidance from our esteemed faculty ensures unparalleled support for every student. Our supportive learning environment fosters growth, encouraging students to reach their full potential. Through personalized attention, regular assessments, and interactive sessions, we pave the way for students to excel in competitive exams and beyond. Join us on your journey to academic success and beyond.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">What we do</h2>
        <p className="content">At Shyam The World of Physics, we specialize in providing top-tier coaching and guidance in JEE, NEET, and other competitive exams. Our comprehensive programs are designed to cater to the diverse needs of students, whether they are preparing for competitive exams, seeking to deepen their understanding of physics concepts, or aiming to excel academically. Through expert instruction, personalized attention, and a supportive learning environment, we empower students to unlock their full potential and achieve success in their physics journey. From rigorous curriculum development to interactive teaching methodologies, we are committed to ensuring that every student receives the tools, resources, and support they need to thrive in their academic journey.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">Why us</h2>
        <p className="content">At Shyam The World of Physics, we stand out as the premier destination for NEET and JEE coaching for several reasons. Firstly, our esteemed faculty, led by Director Neelesh Kumar Gupta, brings a wealth of knowledge and experience, ensuring unparalleled guidance for every student. Secondly, our comprehensive curriculum is meticulously crafted to cover all facets of competitive exams, equipping students with the skills and confidence needed to excel. Lastly, our supportive learning environment fosters growth and encourages students to reach their full potential. With personalized attention, regular assessments, and interactive sessions, we pave the way for students to achieve their academic goals and beyond.</p>
        </div>
       
        
     
    </> );
}
 
export default AboutUs;
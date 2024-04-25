import ContactCard from "../cards/contactcard/ContactCard.js";
import Map from "../map/map.js";
import Stats from "../stats/stats.js";
import styles from "./aboutUs.module.css"
const AboutUs = () => {
    return ( <>
        <div className={`${styles.slide} ${styles.contactus} bg-class flex-class`}>
            <div className={styles.content}>
                <p className={styles.heading}>About Us</p>
                <p className={styles.text}>Infinite Solutions, Infinite Possibilities: Crafting Your Digital Future. Explore Our Vision and Let&apos;s Shape Your Online Success Story Together.</p>
            </div>
            <div className={styles.shade}></div>
        </div>
        <Stats />

        <div className="margin">
        <h2 className="subHeading">Shyam The World of Physics</h2>
        <p className="content">
Welcome to Shyam The World of Physics, a leading destination for exceptional physics coaching. Established with a vision to nurture the next generation of physics enthusiasts and achievers, we pride ourselves on our commitment to excellence and student success. Led by Director Neelesh Kumar Gupta, an esteemed educator and mentor, our institute offers a comprehensive curriculum, expert guidance, and a supportive learning environment. Whether you`&apos;`re preparing for competitive exams or aiming to deepen your understanding of physics, Shyam Institute is dedicated to empowering you to achieve your goals and unlock your full potential in the fascinating world of physics.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">What we do</h2>
        <p className="content">At Shyam The World of Physics, we specialize in providing top-tier coaching and guidance in the field of physics. Our comprehensive programs are designed to cater to the diverse needs of students, whether they are preparing for competitive exams, seeking to deepen their understanding of physics concepts, or aiming to excel academically. Through expert instruction, personalized attention, and a supportive learning environment, we empower students to unlock their full potential and achieve success in their physics journey. From rigorous curriculum development to interactive teaching methodologies, we are committed to ensuring that every student receives the tools, resources, and support they need to thrive in the fascinating realm of physics.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">Why us</h2>
        <p className="content">At Shyam The World of Physics, we stand out as the premier destination for physics coaching for several reasons. Firstly, our esteemed faculty, led by Director Neelesh Kumar Gupta, brings a wealth of knowledge and experience, ensuring unparalleled guidance for every student. Secondly, our comprehensive curriculum is meticulously crafted to cover all facets of competitive physics exams, equipping students with the skills and confidence needed to excel. Lastly, our supportive learning environment fosters growth and encourages students to reach their full potential. With personalized attention, regular assessments, and interactive sessions, we pave the way for students to achieve their academic goals and beyond.</p>
        </div>
       
        <div className="margin">
        <h2 className="subHeading">Contact Shyam The World of Physics</h2>
        <p className="content">Please don&apos;t hesitate to contact us by phone or by using the form below. We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing.</p>
        </div>
       <br></br>
        <div className="body-wrapper">
        <button className="primary-btn blue">Request a callback</button>
        </div>
       <br></br>
       <br></br>
        <div className={`${styles.cardholder} flex-class wrap`} style={{width:"100%", flexWrap:"wrap"}}>
            <ContactCard heading="Timmings" line1="Monday - Saturday" line2="10 A.M. to 7 A.M."></ContactCard>
            <ContactCard heading="Address" line1="18B Navratan Bagh," line2="Karnatwat Pan Center Ke Upar, Near Sant Paul School Geeta Bhawan, Indore"></ContactCard>
            <ContactCard heading="Contact" line1="+9107314020339"></ContactCard>
        </div>
       
        {/* <Map></Map> */}
        <br></br>
        <br></br>
    </> );
}
 
export default AboutUs;
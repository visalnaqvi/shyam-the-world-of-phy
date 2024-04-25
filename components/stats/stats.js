import styles from "./stats.module.css"
const Stats = ()=>{
    const stats = [{
        number:"101+",
        text:"Students Enrolled"
    },{
        number:"500+",
        text:"Live Classes Conducted"
    },{
        number:"424+",
        text:"Teaching Hours"
    }]
    return(
        <div className={`${styles.wrapper} body-wrapper justify-around`}>
            {
                stats.map((s,i)=>(
                    <div key={i} className={styles.card}>
                        <p className={styles.number}>{s.number}</p>
                        <p className={styles.text}>{s.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Stats
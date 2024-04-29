import styles from "./videoBox.module.css"

const VideoBox = ()=>{
    return (
        <div className="body-wrapper">
                <div className={styles.box}>
            <video autoPlay muted controls style={{margin:"auto"}}  width={"100%"} height={600} >
            <source src="../gallary/videos/video_1.mp4" type="video/mp4"/>
        </video>
        </div>


        <div className={styles.box}>
            <video controls style={{margin:"auto"}}  width={"100%"} height={600} >
            <source src="../gallary/videos/video_2.mp4" type="video/mp4"/>
        </video>
        </div>

        <div className={styles.box}>
            <video controls style={{margin:"auto"}}  width={"100%"} height={600} >
            <source src="../gallary/videos/video_3.mp4" type="video/mp4"/>
        </video>
        </div>
        </div>
    )
}

export default VideoBox;
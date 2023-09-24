import styles from "@/components/Header/MyInfoLanding.module.scss";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function MyInfoLanding(){
    const ReadMore = () => (
        <span>, among others. It puts me in a state of deep fascination for what the future holds.
                        <br/>
                        <br/>
                        Building on my vast skill-set in software/app/web/game development, and my familiarity with the latest best practices. I&apos;ve also expanded my creative eye for graphic design, working my first job as a graphic designer at Well Aliments. It has given me an incredible amount of hands-on experience, designing brochures, business cards, product labels, and even 3D modeling for more than 20+ clients. It has put me in a position where I have autonomy in my own designing method, with my signature design stylethat sets me apart from my fellow peers.
                        <br/>
                        <br/>
                        Beyond my professional experiences, I&apos;ve honed my leadership and public speaking abilities. Collaborating with my peers, I&apos;ve guided them through various projects and delivered multiple presentations, including those covering projects, annual reports, and my personal favorite—discussions on climate change and its profound impact on our daily lives.
                        <br/>
                        <br/>
                        My journey through the realms of technology, design, and leadership has not only shaped my professional competence but also instilled in me a deeper appreciation for innovation and the potential to make a meaningful difference in the world.</span>
    )

    const [showMore, setShowMore] = React.useState(false);
    const onClick = () => {
        setShowMore(current => !current)
    };



    return(
        <>
            <section className={styles.fixedInfo}>
                <div className={styles.infoWritten}>
                    <h1 className={styles.name}>Addey Eweis</h1>
                    <h1 className={styles.occupation}>HighSchool Student</h1>
                    <p className={styles.bioSnippet}>I like to build stuff, ranging from software and websites to woodworking.</p>
                </div>
                <div className={styles.socialIconContainer}>
                    <SocialIcon target="_blank" className={styles.socialIcon} bgColor="transparent" fgColor="#aba7c9" url="https://www.linkedin.com/in/addeyeweis"/>
                    <SocialIcon target="_blank" className={styles.socialIcon} bgColor="transparent" fgColor="#aba7c9" url="https://www.instagram.com/addeyeweis"/>
                    <SocialIcon target="_blank" className={styles.socialIcon} bgColor="transparent" fgColor="#aba7c9" url="https://github.com/addey-eweis"/>
                </div>
                <div className={styles.bioContainer}>
                    <h1 className={styles.bioTitle}>ABOUT</h1>
                    <p className={styles.bio}>
                        Since my early days, computers have always had a special place in my heart. Building my first calculator app at the young age of 8, and my personal website at 11. It has given me a glimpse into what would be my future. Now as I look back on my early tinkering years, I have made multiple mobile apps, websites, video games with hands-on experience with multiple languages and frameworks like JavaScript (React JS, Next.js, Node.js, more…), Python (Django), C++, C#, HTML, CSS, SCSS, Bootstrap
                        { showMore ? <ReadMore/>:<span>...</span>}</p>
                    <button onClick={onClick} className={styles.readMoreButton}>{ showMore ? "Read Less" : "Read More"}</button>
                </div>
            </section>
        </>
    )
}

import styles from "@/components/Landing/NonFixedInfo.module.scss";
import React from "react";
import Link from "next/link";
import ExperienceComponent from "@/components/ExperienceComponent/ExperienceComponent";
import ProjectsComponent from "@/components/ProjectsComponent/ProjectsComponent";

export default function NonFixedInfo(){
    return(
        <>
            <section className={styles.nonFixedInfoContainer}>
                <h1 className={styles.experienceTitle}>EXPERIENCE</h1>
                <ExperienceComponent/>
                <Link href="https://drive.google.com/file/d/1PvQvUpkALOH0ze9VjF7269fShtPjcujN/view?usp=sharing" target="_blank" className={styles.viewResume}><h1>View Full Resume Here &#x1F517;</h1></Link>
                <h1 className={styles.projectsTitle}>PROJECTS</h1>
                <ProjectsComponent/>
                <Link href={"#"}><h1 className={styles.fullProjectLink}>View Full Project Timeline &#x1F517;</h1></Link>
            </section>
        </>
    )
}

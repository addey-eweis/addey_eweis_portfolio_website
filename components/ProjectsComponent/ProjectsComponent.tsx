import styles from "./ProjectsComponent.module.scss"
import React from "react";
import Link from "next/link";
import placeholder from "../../media_assets/placeholder.png"


export default function ProjectsComponent(){

    function projectObj(projectName:String, projectDescription: String, projectPicture: String, projectPictureAlt: String, achievement: String, projectHref: String){
        return(
            <div className={styles.projectContainer}>
                <Link href={projectHref.toString()}><h1 className={styles.projectName}>{projectName}</h1></Link>
                <p className={styles.projectDescription}>{projectDescription}</p>
                <img className={styles.projectImage} src={projectPicture.toString()} alt={projectPictureAlt.toString()}/>
                <h1 className={styles.achievementText}>&#9733;&nbsp;{achievement}</h1>
            </div>
        )
    }
    return(
        <>
            <section className={styles.projectsContainer}>
                {projectObj("Learner's Brew Website", "sdlfkjsdlkfjsl lkjsdlkjsd kljldkf sld flsj lkjd lfjlkdj lks l flksj lfkjslkf jdslfjl flkjslfj lskjfklj flksj lf js", placeholder.src.toString(), "project", "500+ Installs", "")}
                {projectObj("Learner's Brew Website", "sdlfkjsdlkfjsl lkjsdlkjsd kljldkf sld flsj lkjd lfjlkdj lks l flksj lfkjslkf jdslfjl flkjslfj lskjfklj flksj lf js", placeholder.src.toString(), "project", "500+ Installs", "")}
                {projectObj("Learner's Brew Website", "sdlfkjsdlkfjsl lkjsdlkjsd kljldkf sld flsj lkjd lfjlkdj lks l flksj lfkjslkf jdslfjl flkjslfj lskjfklj flksj lf js", placeholder.src.toString(), "project", "500+ Installs", "")}
                {projectObj("Learner's Brew Website", "sdlfkjsdlkfjsl lkjsdlkjsd kljldkf sld flsj lkjd lfjlkdj lks l flksj lfkjslkf jdslfjl flkjslfj lskjfklj flksj lf js", placeholder.src.toString(), "project", "500+ Installs", "")}
                {projectObj("Learner's Brew Website", "sdlfkjsdlkfjsl lkjsdlkjsd kljldkf sld flsj lkjd lfjlkdj lks l flksj lfkjslkf jdslfjl flkjslfj lskjfklj flksj lf js", placeholder.src.toString(), "project", "500+ Installs", "")}
                {projectObj("Learner's Brew Website", "sdlfkjsdlkfjsl lkjsdlkjsd kljldkf sld flsj lkjd lfjlkdj lks l flksj lfkjslkf jdslfjl flkjslfj lskjfklj flksj lf js", placeholder.src.toString(), "project", "500+ Installs", "")}
            </section>
        </>
    )
}
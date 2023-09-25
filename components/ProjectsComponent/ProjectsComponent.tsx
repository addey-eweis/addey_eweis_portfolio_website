import styles from "./ProjectsComponent.module.scss"
import React from "react";
import Image from "next/image";


export default function ProjectsComponent(){

    function projectObj(projectName:String, projectDescription: String, projectPicture: String, projectPictureAlt: String){
        return(
            <div className={styles.projectContainer}>
                <h1 className={styles.projectName}>{projectName}</h1>
                <p className={styles.projectDescription}>{projectDescription}</p>
                <Image className={styles.projectImage} src={projectPicture.toString()} alt={projectPictureAlt.toString()} fill={true}/>
            </div>
        )
    }
    return(
        <>
            <section className={styles.projectsContainer}>
                <h1>PROJECTS</h1>
                {projectObj("Learner's Brew Website", "sdlfkjsdlkfjsl lkjsdlkjsd kljldkf sld flsj lkjd lfjlkdj lks l flksj lfkjslkf jdslfjl flkjslfj lskjfklj flksj lf js", "../../public/next.svg", "project")}
            </section>
        </>
    )
}
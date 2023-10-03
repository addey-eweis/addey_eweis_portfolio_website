import styles from "./ProjectsComponent.module.scss"
import React from "react";
import Link from "next/link";
import placeholder from "../../media_assets/placeholder.png"
import WiseWalletApp from "../../media_assets/wiseWalletApp.png"
import learnersbrew from "../../media_assets/learnersbrew.png"
import gymometer from "../../media_assets/gymometer.png"
import wellaliments from "../../media_assets/wellaliments.png"
import personal from "../../media_assets/personalResume.png"
// import {reactRouterDOM} from "react-router-dom"


export default function ProjectsComponent(){

    function projectObj(projectName:String, projectDescription: String, projectPicture: String, projectPictureAlt: String, achievement: String, projectHref: String){
        return(
            <div className={styles.projectContainer}>
                <Link  href={projectHref.toString()} target="_blank"><h1 className={styles.projectName}>{projectName} &#x1F517;</h1></Link>

                <p className={styles.projectDescription}>{projectDescription}</p>
                <img className={styles.projectImage} src={projectPicture.toString()} alt={projectPictureAlt.toString()}/>
                <h1 className={styles.achievementText}>&#9733;&nbsp;{achievement}</h1>
            </div>
        )
    }
    return(
        <>
            <section className={styles.projectsContainer}>
                {projectObj("Wise Wallet App", "An app that lets you track your finances and set weekly budgets to freely spending your money worry-free!", WiseWalletApp.src.toString(), "Wise Wallet App", "50+ Installs", "https://github.com/addey-eweis/WiseWalletApp")}
                {projectObj("Learner's Brew Website", "An educational website that lets you access thousands of resources for literary devices and non-fiction analysis", learnersbrew.src.toString(), "Learner's Brew", "400+ Visitors", "https://github.com/addey-eweis/learnersbrew")}
                {projectObj("Gymometer Website", "A website that lets you access hands-on videos for each muscle group in the human body, each major muscle group is categorized and has videos showing how to train them.", gymometer.src.toString(), "Gymometer", "20+ Visitors", "https://addey-eweis.github.io/Gymometer/")}
                {projectObj("Well Aliments Website HomePage", "Worked on redesigning an outdated website, total revamping the design from an old one to a modern look that increased loading speeds and increased traffic.", wellaliments.src.toString(), "Well Aliments", "50000+ Monthly Visitors", "https://wellaliments.com")}
                {projectObj("Personal Portfolio Website", "That's what you're on right now, this website was made by me; Highlighting my professional career and recent projects.", personal.src.toString(), "Personal Website", "Looks Good!", "")}
            </section>
        </>
    )
}
import styles from "@/components/ExperienceComponent/ExperienceComponent.module.scss";
import Link from "next/link";
import React from "react";

export default function(){
    function experienceObject(jobTitle:String, companyName: String, startDate:String, endDate:String, jobType:String, jobDescription: String, companyHref: String, tagNames: String[]){
        const skillTag = (tagName:String) =>{
            return(
                <div className={styles.skillTag}>
                    <h1 className={styles.skillTagName}>{tagName}</h1>
                </div>
            )
        }
        return(
            <div className={styles.experienceContainer}>
                <h1 className={styles.jobDate}>{startDate} &mdash; {endDate}</h1>
                <Link href={companyHref.toString()} target="_blank"><h1 className={styles.companyName}>{companyName} &#183; <span>{jobType}</span> 	&#x1F517; </h1></Link>
                <h1 className={styles.jobTitle}>{jobTitle}</h1>
                <p className={styles.jobDescription}>{jobDescription}</p>
                <div className={styles.skillTagContainer}>
                    {skillTag(tagNames[0])}
                    {skillTag(tagNames[1])}
                    {skillTag(tagNames[2])}
                    {skillTag(tagNames[3])}
                    {skillTag(tagNames[4])}
                    {skillTag(tagNames[5])}
                    {skillTag(tagNames[6])}
                    {skillTag(tagNames[7])}

                </div>
            </div>
        )

    }

    const tagsOne:String[] = ["TypeScript", "Next.js", "GraphQL", "Git", "SASS", "JetBrains WebStorm", "Leadership", "Time Management"]
    const tagsTwo:String[] = ["JavaScript", "Tailwinds CSS", "Java", "Android Studio", "Python", "SpringBoot", "Photoshop", "Illustrator"]
    const tagsThree:String[] = ["Photoshop", "Illustrator", "Figma", "Indesign", "UI/UX Design", "Front-End Dev. Suite", "Attention To Detail", "Creativity"]
    const tagsFour:String[] = ["QuickBooks", "Employee Management", "Leadership", "Microsoft Teams", "Plan Development", "Attention To Detail", "Time Management", "HR System Training"]
    return(
        <>
            {experienceObject("Software Development & Graphic Design Intern", "CoreExponent", "July 2023", "Present", "Internship", "At CoreExponent, I had the incredible opportunities to go beyond my comfort zone, this has allowed me to learn new frameworks and adhere to the industry’s best practices. Attention to detail and Time-Management are the top two qualities other than the extensive network of technologies I had the privilege to learn. These technologies includes Next.js, HTML, SASS, TypeScript, and GraphQL. Working with the CoreExponent team sparked a period of self-growth and intellectual development that I can’t say I found elsewhere.", "https://coreexponent.com/", tagsOne)}
            {experienceObject("Freelance Front-End Developer", "UpWork", "Nov 2019", "July 2023", "Freelance", "Working on UpWork was the first stepping stone to my professional career, starting at the ripe age of 13, I had a great growth journey working with clients and making sure they are beyond satisfied with the work provided. Starting at a young age has taught me incredible time-management skills that enabled me to juggle both school and my work, enabling me to fund my personal programming projects.", "https://upwork.com/", tagsTwo)}
            {experienceObject("Graphic Designer", "Well Aliments LLC", "Sep 2017", "Jun 2023", "Part-Time", "", "https://wellaliments.com/", tagsThree)}
            {experienceObject("Business Development Associate", "Dietica Health International", "July 2020", "July 2021", "Full Time", "", "https://www.dietica-health.com/", tagsFour)}
        </>
    )
}

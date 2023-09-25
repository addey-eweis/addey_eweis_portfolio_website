import styles from "@/components/ExperienceComponent/ExperienceComponent.module.scss";
import Link from "next/link";
import React from "react";

export default function(){
    function experienceObject(jobTitle:String, companyName: String, startDate:String, endDate:String, jobType:String, jobDescription: String, companyHref: String){
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
                <Link href={companyHref.toString()}><h1 className={styles.companyName}>{companyName} &#183; {jobType} 	&#x1F517; </h1></Link>
                <h1 className={styles.jobTitle}>{jobTitle}</h1>
                <p className={styles.jobDescription}>{jobDescription}</p>
                <div className={styles.skillTagContainer}>
                    {skillTag("JavaScript")}
                    {skillTag("JavaScript")}
                    {skillTag("JavaScript")}
                    {skillTag("JavaScript")}
                    {skillTag("JavaScript")}
                    {skillTag("JavaScript")}
                    {skillTag("JavaScript")}

                </div>
            </div>
        )

    }
    return(
        <>
            {experienceObject("Business Development Associate", "Well Aliments", "July 2020", "Present", "Full Time", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dignissim nisl. Suspendisse imperdiet ligula molestie porta pretium. Nam pharetra nec neque in finibus. Aliquam vestibulum ipsum quis libero venenatis laoreet. Integer consectetur nibh et enim venenatis, nec iaculis justo facilisis. Aliquam cursus hendrerit mi eu maximus.", "https://www.dietica-health.com/")}
            {experienceObject("Business Development Associate", "Well Aliments", "July 2020", "Present", "Full Time", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dignissim nisl. Suspendisse imperdiet ligula molestie porta pretium. Nam pharetra nec neque in finibus. Aliquam vestibulum ipsum quis libero venenatis laoreet. Integer consectetur nibh et enim venenatis, nec iaculis justo facilisis. Aliquam cursus hendrerit mi eu maximus.", "https://www.dietica-health.com/")}
            {experienceObject("Business Development Associate", "Well Aliments", "July 2020", "Present", "Full Time", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dignissim nisl. Suspendisse imperdiet ligula molestie porta pretium. Nam pharetra nec neque in finibus. Aliquam vestibulum ipsum quis libero venenatis laoreet. Integer consectetur nibh et enim venenatis, nec iaculis justo facilisis. Aliquam cursus hendrerit mi eu maximus.", "https://www.dietica-health.com/")}
            {experienceObject("Business Development Associate", "Well Aliments", "July 2020", "Present", "Full Time", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dignissim nisl. Suspendisse imperdiet ligula molestie porta pretium. Nam pharetra nec neque in finibus. Aliquam vestibulum ipsum quis libero venenatis laoreet. Integer consectetur nibh et enim venenatis, nec iaculis justo facilisis. Aliquam cursus hendrerit mi eu maximus.", "https://www.dietica-health.com/")}
            {experienceObject("Business Development Associate", "Well Aliments", "July 2020", "Present", "Full Time", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dignissim nisl. Suspendisse imperdiet ligula molestie porta pretium. Nam pharetra nec neque in finibus. Aliquam vestibulum ipsum quis libero venenatis laoreet. Integer consectetur nibh et enim venenatis, nec iaculis justo facilisis. Aliquam cursus hendrerit mi eu maximus.", "https://www.dietica-health.com/")}
            {experienceObject("Business Development Associate", "Well Aliments", "July 2020", "Present", "Full Time", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dignissim nisl. Suspendisse imperdiet ligula molestie porta pretium. Nam pharetra nec neque in finibus. Aliquam vestibulum ipsum quis libero venenatis laoreet. Integer consectetur nibh et enim venenatis, nec iaculis justo facilisis. Aliquam cursus hendrerit mi eu maximus.", "https://www.dietica-health.com/")}
        </>
    )
}

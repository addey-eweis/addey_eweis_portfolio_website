import styles from "@/components/Header/NonFixedInfo.module.scss";
import React from "react";
import exp from "constants";
import Link from "next/link";

export default function NonFixedInfo(){
    function experienceObject(jobTitle:String, companyName: String, startDate:String, endDate:String, roleName:String, jobDescription: String, companyHref: String){
        return(
            <div className={styles.experienceContainer}>
                <Link href={companyHref.toString()}><h1 className={styles.jobTitle}>{jobTitle}</h1></Link>
            </div>
        )
    }

    return(
        <>
            <section className={styles.nonFixedInfoContainer}>
                <h1 className={styles.experienceTitle}>EXPERIENCE</h1>
                {experienceObject("Business Development Associate", "sdf", "sdf", "sdsf", "sdf", "sdfsdf", "https://www.dietica-health.com/")}
            </section>
        </>
    )
}

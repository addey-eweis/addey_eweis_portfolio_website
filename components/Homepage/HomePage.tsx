import styles from "./HomePage.module.scss"
import React from 'react';
import MyInfoLanding from "@/components/Landing/MyInfoLanding";
import NonFixedInfo from "@/components/Landing/NonFixedInfo";

export default function HomePage(){
    return(
        <>
            <section className={styles.main}>
                <div className={styles.fixedInfo}>
                    <MyInfoLanding/>
                </div>
                <div className={styles.nonFixedInfo}>
                    <NonFixedInfo/>
                </div>
            </section>
        </>
    )
}


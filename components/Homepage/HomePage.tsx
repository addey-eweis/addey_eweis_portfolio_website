import styles from "./HomePage.module.scss"
import React from 'react';
import MyInfoLanding from "@/components/Header/MyInfoLanding";

export default function HomePage(){
    return(
        <>
            <section className={styles.main}>
                <MyInfoLanding/>
            </section>
        </>
    )
}


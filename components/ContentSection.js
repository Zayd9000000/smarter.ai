import React from 'react';
import styles from '../styles/ContentSection.module.css';

export default function ContentSection() {
    return (
        <div className={styles.content}>
            <div className={styles.contentInner}>
                <h2 className={styles.contentHd}>Experience Adam. Rethink Hiring.</h2>
                <p className={styles.contentDescription}>
                    Transform your hiring process with AI-powered insights and seamless collaboration.
                </p>
                <button className={`${styles.secondaryBtn} ${styles.signupBtn} ${styles.invert}`}>
                    Get Started Free
                </button>
            </div>
        </div>
    );
} 
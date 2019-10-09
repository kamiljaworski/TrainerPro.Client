import React from 'react';
import styles from './Home.module.scss';
import { HomeProps } from './HomeProps';

const Home: React.FC<HomeProps> = ({ name }) => {
    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default Home;

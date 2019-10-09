import React, { useEffect } from 'react';
import styles from './Login.module.scss';
import { LoginProps } from './LoginProps';

const Login: React.FC<LoginProps> = ({authorization, loginUser, text}) => {
    useEffect(() => {
        setTimeout(() => {
            loginUser("Sebastianix", "qwerty"); 
        }, 2000);
    }, [loginUser])

    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <p>
                    Username: {authorization.username}
                </p>
            </header>
        </div>
    );
}

export default Login;

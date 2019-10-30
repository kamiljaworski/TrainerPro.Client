import React, { useEffect, useRef } from 'react';
import LoaderProps from './LoaderProps';
import styles from './Loader.module.scss';
import { CircularProgress } from '@material-ui/core';

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loaderRef.current) {
            if(isLoading) {
                loaderRef.current.style.zIndex = '100';
                loaderRef.current.classList.add(styles.active);
            }
            else {
                loaderRef.current.classList.remove(styles.active)
                setTimeout(() => {
                    if (loaderRef.current) loaderRef.current.style.zIndex = '-100';                    
                }, 125);
            }
        }
    }, [isLoading])

    return (
        <div className={styles.loader} ref={loaderRef}>
            <CircularProgress />
        </div>
    )
}

export default Loader;

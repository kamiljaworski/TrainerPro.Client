import React, { useRef, useEffect } from 'react';

export default function useInterval(callback: any, delay: any) {
    const savedCallback = useRef<any>();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            if(savedCallback && savedCallback.current) {
                savedCallback.current();
            }
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}
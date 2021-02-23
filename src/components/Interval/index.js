import React, { useState, useEffect, useRef } from 'react';

/**
 * A hook to run a function in some interval 
 * @param {Function} callback 
 * @param {Integer} delay 
 */
export function useInterval(callback, delay) {
    const savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])
    console.log(savedCallback.current)
    useEffect(()=> {
        if(delay !== null) {
            let id = setInterval(() => {
                savedCallback.current()
            }, delay)

            return () => clearInterval(id)
        }
    }, [delay])
    console.log(delay)

}


import {useState} from 'react';

export const useFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetch = async (...args) => { 
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (i) {
            setError(i.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetch, isLoading, error]
}
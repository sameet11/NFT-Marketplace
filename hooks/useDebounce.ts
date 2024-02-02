
import { useState, useEffect } from "react";

const useDebounce = (value: string, delay?: number): string => {
    const [debounevalue, setdebouncevalue] = useState<string>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setdebouncevalue(value);
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])
    return debounevalue;
}

export default useDebounce;
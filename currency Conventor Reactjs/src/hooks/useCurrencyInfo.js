import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({}); // ✅ Correct useState syntax

    useEffect(() => { // ✅ Do not reassign `useEffect`
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );
                const result = await response.json();
                setData(result[currency]); // ✅ Correctly updating state
            } catch (error) {
                console.error(`Error fetching currency data: ${error}`);
            }
        };
        fetchData();
    }, [currency]); // ✅ Dependency array ensures effect runs when currency changes

    return data;
};

export default useCurrencyInfo;

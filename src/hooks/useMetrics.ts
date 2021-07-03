import axios from "axios";
import { useEffect, useState  } from "react";

const initialState = {
    "monthly_transactions": 0,
    "total_wallets": 0,
    "frozen_coins": 0.0,
    "netwok_hashrate": "0 GH/s"
}

const endpoint = "http://135.181.196.253:8000/clo_metrics";
const useMetrics = () => {
    const [metrics, setMetrics] = useState(initialState);

    useEffect(() => {
        const fetchData = () => {
           setInterval(() => {
                axios.get(endpoint).then((res) => {
                    setMetrics(res.data.result);
                })
                .catch((err) => {
                })
            }, 1000)
            
        }
        fetchData();
        return () => {
            clearInterval();
        }
    }, [setMetrics]);

    return metrics;
}

export default useMetrics;
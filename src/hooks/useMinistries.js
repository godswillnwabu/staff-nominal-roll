import { useEffect, useState } from "react";
import { getMinistries } from "../api/ministries";

export function useMinistries({ page = 1, pageSize = 12 } = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setLoading(true);
        getMinistries({ page, page_size: pageSize })
            .then(setData)
            .finally(() => setLoading(false));
    }, [page, pageSize]);

    return { data, loading };
}
import { useEffect, useState } from "react";
import { getDepartments } from "../api/departments";

export function useDepartments({ ministryId, page = 1, pageSize = 9 } = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!ministryId) return;

        setLoading(true);
        getDepartments({ ministryId, page, page_size: pageSize })
            .then(setData)
            .finally(() => setLoading(false));
    }, [ministryId, page, pageSize]);

    return { data, loading };
}
import { useEffect, useState } from "react";
import { getDepartments } from "../api/departments";


export function useDepartments({ ministryId, page = 1, pageSize = 9 } = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!ministryId) return;
        let alive = true;

        async function fetchDepartments() {
            setLoading(true);
            setError(null);

            try {
                const result = await getDepartments({ ministryId, page, page_size: pageSize });
                if (alive) setData(result);
            }   catch (err) {
                if (alive) setError(err);
            }   finally {
                if (alive) setLoading(false);
            }
        }

        fetchDepartments();

        return () => {
            alive = false;
        };
    }, [ministryId, page, pageSize]);

    return { data, loading, error };
}

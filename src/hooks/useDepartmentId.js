import { useEffect, useState } from "react";
import { getDepartment } from "../api/departments";


export function useDepartment(id) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!id) return;
        getDepartment(id)
            .then(setData);
    }, [id]);

    return { data };
}



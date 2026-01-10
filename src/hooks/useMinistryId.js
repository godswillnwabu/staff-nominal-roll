import { useEffect, useState } from "react";
import { getMinistry } from "../api/ministries";


export function useMinistry(id) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!id) return;
        getMinistry(id)
            .then(setData);
    }, [id]);
    // console.log(getMinistry(id))
    return { data };
}
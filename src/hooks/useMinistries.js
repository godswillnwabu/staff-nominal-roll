import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createMinistry, getMinistries, getMinistry, importMinistry, updateMinistry, deleteMinistry } from "../api/ministries";


export const useCreateMinistry = () => 
    useMutation({ mutationFn: createMinistry });


export function useMinistries({ page = 1, pageSize = 12} = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let alive = true;

        async function fetchMinistries() {
            setLoading(true);
            setError(null);

            try {
                const result = await getMinistries({ page, page_size: pageSize });
                if (alive) setData(result);
            }   catch (err) {
                if (alive) setError(err);
            }   finally {
                if (alive) setLoading(false);
            }
        }

        fetchMinistries();

        return () => {
            alive = false;
        };
    }, [page, pageSize]);

    return { data, loading, error };
}


export const useMinistry = (id) => 
    useQuery({
        queryKey: ["ministry", id],
        queryFn: () => getMinistry(id),
        enabled: !!id,
    });


export const useImportMinistry = () =>
    useMutation({ mutationFn: ({ file, ministryId }) => importMinistry(file, ministryId) });


export const useUpdateMinistry = () =>
    useMutation({ mutationFn: ({ id, data }) => updateMinistry(id, data) });


export const useDeleteMinistry = () => 
    useMutation({ mutationFn: deleteMinistry });

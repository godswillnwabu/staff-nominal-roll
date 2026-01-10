import { useQuery } from "@tanstack/react-query";
import { getStaff } from "../api/staff";

export const useStaff = ({ ministryId, departmentId, page, pageSize, 
    search, rank}) => {
        return useQuery({
            queryKey: ["staff", ministryId, departmentId, page, pageSize, search, rank],

            queryFn: () => 
                getStaff({
                ministryId,
                departmentId,
                page,
                page_size: pageSize,
                search,
                rank
            }),
            keepPreviousData: true,
            enabled: Boolean(ministryId && departmentId), // only run if departmentId is provided
            staleTime: 1000,
        });
    };
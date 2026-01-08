import { useQuery } from "@tanstack/react-query";
import { getStaff } from "../api/staff";

export const useStaff = ({ departmentId, page, pageSize, 
    search, rank}) => {
        return useQuery({
            queryKey: ["staff", departmentId, page, pageSize, search, rank],

            queryFn: () => 
                getStaff({
                departmentId,
                page,
                page_size: pageSize,
                search,
                rank
            }),
            keepPreviousData: true,
            // enabled: !!departmentId, // only run if departmentId is provided
            staleTime: 1000
        });
    };
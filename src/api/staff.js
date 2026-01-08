import { apiFetch } from "./client";

export const getStaff = ({ 
    departmentId,
    page = 1,
    pageSize = 6,
    search = "",
    rank = ""
}) => {
    return apiFetch(`/departments/${departmentId}/staff`, {
        params: {
            page,
            page_size: pageSize,
            search: search || undefined,
            rank: rank || undefined
        }
    });
};
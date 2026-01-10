import { apiFetch } from "./client";

export const getStaff = ({ 
    ministryId,
    departmentId,
    page = 1,
    pageSize = 6,
    search = "",
    rank = ""
}) => {
    return apiFetch(
        `/ministries/${ministryId}/departments/${departmentId}/staff?page=${page}&page_size=${pageSize}`, {
        params: {
            page,
            page_size: pageSize,
            search: search || undefined,
            rank: rank || undefined,
        }
    });
};
import { apiFetch } from "./client";

export const getStaff = ({ 
    ministryId,
    departmentId,
    page = 1,
    pageSize = 6,
    search = "",
    rank = ""
}) => {
    const params = new URLSearchParams({
        page,
        page_size: pageSize,
    });

    if (search) params.append("search", search);
    if (rank) params.append("rank", rank);

    return apiFetch(
        `/ministries/${ministryId}/departments/${departmentId}/staff?${params.toString()}` 
    );
};
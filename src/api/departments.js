import { apiFetch } from "./client";

export const getDepartments = ({ ministryId, page = 1, pageSize = 9 }) => {
    return apiFetch(`/ministries/${ministryId}/departments?page=${page}&page_size=${pageSize}`);
};

// export const getDepartment = (id) => apiFetch(`/ministries/${id}/departments/${id}`);
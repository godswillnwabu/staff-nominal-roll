import { apiFetch } from "./client";

export const getMinistries = ({ page = 1, pageSize = 12 }) => {
    return apiFetch(`/ministries?page=${page}&page_size=${pageSize}`);
};

export const getMinistry = (id) => apiFetch(`/ministries/${id}`);
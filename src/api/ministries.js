import { apiFetch } from "./client";

export const createMinistry = (data) => 
    apiFetch("/ministries", {
        method: "POST",
        body: JSON.stringify(data),
    });

export const getMinistries = ({ page = 1, pageSize = 12 }) => {
    return apiFetch(`/ministries?page=${page}&page_size=${pageSize}`);
};

export const getMinistry = (id) => apiFetch(`/ministries/${id}`);

export const importMinistry = (file, ministryId) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("ministry_id", ministryId);

    return apiFetch("/import", {
        method: "POST",
        body: formData,
    });
};

export const updateMinistry = (id, data) => 
    apiFetch(`/ministries/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    })

export const deleteMinistry = (id) => 
    apiFetch(`/ministries/${id}`, {
        method: "DELETE",
    })
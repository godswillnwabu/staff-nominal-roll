const API_BASE = "http://localhost:8000";

export async function apiFetch(path, options = {}) {
    const isFormData = options.body instanceof FormData;

    const res = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers: {
            ...(isFormData ? {} : {"Content-Type": "application/json"}),
            ...(options.headers || {}),
        },
    });

    if (!res.ok) {
        let errorText;
        try {
            errorText = await res.text();
        } catch {
            errorText = "API request failed";
        }
        throw new Error(errorText);
    }

    // Some endpoints may return no JSON (204 etc)
    const text = await res.text();
    try {
        return text ? JSON.parse(text) : null;
    } catch {
        return text;
    }
}
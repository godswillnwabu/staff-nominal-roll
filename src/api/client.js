const API_BASE = "http://localhost:8000";

export async function apiFetch(path, options = {}) {
    const res = await fetch(`${API_BASE}${path}`, {
        headers: {"Content-Type": "application/json"},
        ...options,
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "API request failed");
    }

    return res.json();
}
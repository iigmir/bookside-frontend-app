const API_HOST = () => import.meta.env.VITE_API_HOST;

export async function GetBookList() {
    const api = `${API_HOST()}/books`;
    const r = await fetch(api);
    return await r.json();
}

export async function GetBookItem(isbn = "") {
    const api = `${API_HOST()}/books/${isbn}`;
    const r = await fetch(api);
    return await r.json();
}
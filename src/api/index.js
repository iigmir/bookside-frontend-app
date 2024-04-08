const API_HOST = () => import.meta.env.VITE_API_HOST;

export function GetBookList() {
    const api = API_HOST() + "/books/";
    const ajax = fetch(api).then(r => r.json());
    return ajax;
}

export function GetBookItem(isbn = "") {
    const api = API_HOST() + "/books/" + isbn;
    const ajax = fetch(api).then(r => r.json());
    return ajax;
}
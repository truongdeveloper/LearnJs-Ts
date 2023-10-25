
export const URL_ALL_COUNTRY = "https://restcountries.com/v3.1/all"
export const URL_SEARCH = (name: string) => {
    return `https://restcountries.com/v3.1/name/${name}`
}

export class ErrorCustom extends Error {
    title: string;
    constructor(title: string, message: string) {
        super(message);
        this.title = title
    };

    show(): void {
        console.error(this.message, this.stack)
        const errorContainer = document.getElementById('error-container');
        if (errorContainer) {
            
            const errorElement = document.createElement('div');
            errorElement.className = 'error';
            errorElement.innerHTML = `<Strong>${this.title}:</Strong> ${this.message}`;
            errorContainer.appendChild(errorElement);
            errorContainer.classList.add('show');
            setTimeout(() => {
                errorContainer.classList.remove('show');
                errorContainer.removeChild(errorElement)
            },2000)
        }
    }
}


export function showLoading():void {
    const loading = document.getElementById('loading');
    if (loading) {
        const loadingElement = document.createElement('div');
        loadingElement.className = 'loadingIcon';
        loadingElement.innerHTML = `<h1>Loading...</h1>`;
        loading.appendChild(loadingElement);
    }
}
export function hideLoading():void {
    const loading = document.getElementById('loading');
    if (loading) {
        // Xóa tất cả phần tử con trong phần tử loading
        while (loading.firstChild) {
            loading.removeChild(loading.firstChild);
        }
    }
}
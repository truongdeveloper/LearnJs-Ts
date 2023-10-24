System.register([], function (exports_1, context_1) {
    "use strict";
    var URL_ALL_COUNTRY, URL_SEARCH, ErrorCustom;
    var __moduleName = context_1 && context_1.id;
    function showLoading() {
        const loading = document.getElementById('loading');
        if (loading) {
            const loadingElement = document.createElement('div');
            loadingElement.className = 'loadingIcon';
            loadingElement.innerHTML = `<h1>Loading...</h1>`;
            loading.appendChild(loadingElement);
        }
    }
    exports_1("showLoading", showLoading);
    function hideLoading() {
        const loading = document.getElementById('loading');
        if (loading) {
            while (loading.firstChild) {
                loading.removeChild(loading.firstChild);
            }
        }
    }
    exports_1("hideLoading", hideLoading);
    return {
        setters: [],
        execute: function () {
            exports_1("URL_ALL_COUNTRY", URL_ALL_COUNTRY = "https://restcountries.com/v3.1/all");
            exports_1("URL_SEARCH", URL_SEARCH = (name) => {
                return `https://restcountries.com/v3.1/name/${name}`;
            });
            ErrorCustom = class ErrorCustom extends Error {
                constructor(title, message) {
                    super(message);
                    this.title = title;
                }
                ;
                show() {
                    const errorContainer = document.getElementById('error-container');
                    if (errorContainer) {
                        console.error(this.message, this.stack);
                        const errorElement = document.createElement('div');
                        errorElement.className = 'error';
                        errorElement.innerHTML = `<strong>${this.title}:</strong> ${this.message}`;
                        errorContainer.appendChild(errorElement);
                    }
                }
            };
            exports_1("ErrorCustom", ErrorCustom);
        }
    };
});

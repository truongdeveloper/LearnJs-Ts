System.register(["./contant.js"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var contant_js_1;
    var __moduleName = context_1 && context_1.id;
    function getAPI(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fetch(url);
                console.log(response);
                if (!response.ok) {
                    throw new contant_js_1.ErrorCustom("Lỗi gọi API", "404 Not Found ");
                }
                else {
                    let data = yield response.json();
                    console.log(data);
                    return data;
                }
            }
            catch (error) {
                throw new contant_js_1.ErrorCustom("Lỗi gọi API", error.message);
            }
        });
    }
    function getData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            contant_js_1.showLoading();
            try {
                const data = yield getAPI(url);
                return data;
            }
            catch (error) {
                throw error;
            }
            finally {
                contant_js_1.hideLoading();
            }
        });
    }
    exports_1("getData", getData);
    return {
        setters: [
            function (contant_js_1_1) {
                contant_js_1 = contant_js_1_1;
            }
        ],
        execute: function () {
        }
    };
});

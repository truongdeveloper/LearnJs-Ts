System.register(["./contant.js", "./getAPI.js"], function (exports_1, context_1) {
    "use strict";
    var contant_js_1, getAPI_js_1, AllCountry, cardMain, findCountry;
    var __moduleName = context_1 && context_1.id;
    function loadData(dataEx) {
        let html = [];
        for (let i = 0; i < (dataEx === null || dataEx === void 0 ? void 0 : dataEx.length); i++) {
            html.push(`<div class="country-card dark-theme-light" data-aos="zoom-in" value="${dataEx[i][1]}">
                      <img src="${dataEx[i][0]}" alt="" class="flag">
                      <div class="infor infor-dark">
                          <h3 class="name-country">${dataEx[i][1]}</h3>
                          <div class="info-country">
                              <p class="popular"> <strong>Population:</strong> ${dataEx[i][2]}
                              </p>
                              <p class="region"> <strong>Region: </strong>${dataEx[i][3]}</p>
                              <p class="capital"> <strong> Capital: </strong>${dataEx[i][4]}</p>
                          </div>
                      </div>
                  </div>`);
        }
        cardMain.innerHTML = html.join("");
    }
    return {
        setters: [
            function (contant_js_1_1) {
                contant_js_1 = contant_js_1_1;
            },
            function (getAPI_js_1_1) {
                getAPI_js_1 = getAPI_js_1_1;
            }
        ],
        execute: function () {
            AllCountry = getAPI_js_1.getData(contant_js_1.URL_ALL_COUNTRY);
            AllCountry.then(dataAPI => {
                let data = dataAPI.map((item) => {
                    return [
                        item.flags.svg,
                        item.name.common,
                        item.population,
                        item.region,
                        item.capital
                    ];
                });
                console.log(data);
                loadData(data);
            }).catch((error) => {
                error.show();
            });
            cardMain = document.getElementById('card-main');
            findCountry = document.getElementById("find-country");
            findCountry.onchange = function () {
                let keyword = findCountry.value;
                let url;
                if (keyword == '') {
                    url = contant_js_1.URL_ALL_COUNTRY;
                }
                else {
                    url = contant_js_1.URL_SEARCH(keyword);
                }
                getAPI_js_1.getData(url).then(dataAPI => {
                    let data = dataAPI.map((item) => {
                        return [
                            item.flags.svg,
                            item.name.common,
                            item.population,
                            item.region,
                            item.capital
                        ];
                    });
                    console.log(data);
                    loadData(data);
                }).catch((error) => {
                    error.show();
                });
            };
        }
    };
});

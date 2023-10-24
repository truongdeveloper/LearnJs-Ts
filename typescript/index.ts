import { URL_ALL_COUNTRY, URL_SEARCH } from "./contant.js";
import { getData } from "./getAPI.js";


let AllCountry = getData(URL_ALL_COUNTRY);

AllCountry.then(dataAPI => {
    let data = dataAPI.map((item) => {
        return [
            item.flags.svg,
            item.name.common,
            item.population,
            item.region,
            item.capital
        ]
    });
    console.log(data)
    loadData(data)
}).catch((error) =>{
    error.show()
});

const cardMain = document.getElementById('card-main');


function loadData(dataEx: any) {
    let html = [];
    for (let i = 0; i < dataEx?.length; i++) {
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

const findCountry = document.getElementById("find-country") as HTMLInputElement
findCountry.onchange = function() {
  let keyword: string = findCountry.value

  getData(URL_SEARCH(keyword)).then(dataAPI => {
    let data = dataAPI.map((item) => {
        return [
            item.flags.svg,
            item.name.common,
            item.population,
            item.region,
            item.capital
        ]
    });
    console.log(data)
    loadData(data)
    }).catch((error) =>{
        error.show()
    });
}




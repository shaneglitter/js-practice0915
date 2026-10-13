export function renderTable(train,fav,){
    const html = train.map(re=> `<tr data-id="${re.StationID}"><td class="Star">${fav.includes(re.StationID)?"★":"☆"}</td><td>${re.StationID}</td><td>${re.StationName.Zh_tw}</td><td>${re.StationAddress}</td></tr>`).join("");
     document.querySelector("#result").innerHTML = html
};
export function renderDetail(fit){
    document.querySelector("#detail").innerHTML =`<p>${fit.StationPosition.PositionLon},${fit.StationPosition.PositionLat}</p><p>${fit.StationName.Zh_tw}</p>`;
};

import {getResource} from"./api.js";
import { fav,detectStar,switchStar} from "./fav.js";
import { renderTable,renderDetail } from "./ui.js";
 let outcome

        document.querySelector("#btn").addEventListener("click",async function(event){
            try{
                document.querySelector("#loading").textContent ="loading"
                const train = await getResource();
                outcome =train
                console.log(outcome.map(re=>re.LocationCity))
                renderTable(train,fav);               
                document.querySelector("#loading").textContent ="完成"
                
            }
            catch(err){
                document.querySelector("#loading").textContent = err.message
            }});
         document.querySelector("#result").addEventListener("click", function(event){
            const row = event.target.closest("tr");
            if(!row){return};
            const isStar = event.target.classList.contains("Star");
            const id = row.dataset.id;
            if (isStar){
                switchStar(id);
                event.target.textContent = detectStar(id)?"★":"☆";
                return;
            }
            });
            
                       
                const fit =  outcome.find(station => station.StationID ===id );
                renderDetail(fit);
         
           document.querySelector("#searchList").addEventListener("change", function(event){
                if(!outcome){return};
                const selectedCity = event.target.value
                if(!selectedCity){
                    let train = outcome
                    renderTable(train,fav)
                return}
                const corresponse = outcome.filter(re=>re.LocationCity === selectedCity);
                let train = corresponse
                renderTable(train,fav);
           })
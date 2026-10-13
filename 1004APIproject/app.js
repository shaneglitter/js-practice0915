
import {getResource} from"./api.js";
import { fav,detectFav,toggleFav} from "./fav.js";
import { renderTable,renderDetail } from "./ui.js";
 let outcome

        document.querySelector("#btn").addEventListener("click",async function(event){
            try{
                document.querySelector("#loading").textContent ="loading"
                const train = await getResource();
                outcome =train
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
                toggleFav(id);
                event.target.textContent = detectFav(id)?"★":"☆";
                return;
            }
            
                       
            const fit =  outcome.find(station => station.StationID ===id );
           renderDetail(fit);
           });
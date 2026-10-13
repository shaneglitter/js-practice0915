export  let fav = JSON.parse(localStorage.getItem("fav"))||[];


export function detectStar (id,isStar){
 if(isStar){ 
            return fav.includes(id);
            }
};

export function switchStar(fav,id){
    if(fav.includes(id))
    {fav = fav.filter(re=>re !==id)
    }else{
        fav.push(id);
        }
    localStorage.setItem("fav",JSON.stringify(fav));
};
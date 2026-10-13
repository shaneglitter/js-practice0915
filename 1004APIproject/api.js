export async function getResource() {
    

 const URL =await fetch("https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/station?%24top=10&%24format=JSON");
                if(!URL.ok){throw new Error(`出錯了${URL.status}`)};
 const train =await URL.json();
 return train;
 };
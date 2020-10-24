jQuery('document').ready(function(){
  
    jQuery('#geolocation').click(getInfo);
    async function getInfo(){
         let url ='https://www.ipinfo.io/json';
         let data = await fetch(url);
         let response=await data.json();
         cordinates=response.loc.split(',');
         let info=[];
         info.push(cordinates[0]);
         info.push(cordinates[1]);
         info.push(response.ip);
         info.push(response.city);
         info.push(response.region);
         info.push(response.country);
        for(let i=0;i<info.length;++i)
        {
            td=document.getElementById(i);
            cell=document.createTextNode(info[i]);
            td.appendChild(cell);
    
        }
    }});
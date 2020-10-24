$('document').ready(function(){

    table=document.getElementById('table');       
    str=[];
    str[0]="#4E5D6C";
    str[1]="#5cb85c";
    str[2]="#d9534f";
    str[3]="#f0ad4e";
    str[4]="#2B3E50";
    str[5]="#4E5D6C";
    str[6]="#5cb85c";
    str[7]="#d9534f";
    str[8]="#f0ad4e";
    str[9]="#2B3E50";
    let k=0;

    for(let i=0;i<10;++i)
    {
    lat=parseFloat((Math.random()*180-90+1).toFixed(14));
    long=parseFloat((Math.random()*360-180+1).toFixed(14));
    data=[lat,long];
    tbody=document.createElement('tbody');
    
    tr=document.createElement('tr');
    tr.style.backgroundColor=str[k++];
    
    area=document.getElementById('maps');

    for(let j=0;j<data.length;++j)
    {
        tr.setAttribute('class','text-center');
        td=document.createElement('td');
        cell=document.createTextNode(data[j]);
        td.appendChild(cell);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);   
}
$('table>tbody>tr').mouseover(function(){
    var latitude = $(this).find('td:first-child').text();
    var longitude=$(this).find('td:nth-child(2)').text();
    var latitude2=parseFloat(latitude);
    var longitude2=parseFloat(longitude);
    var mapProp= {
        center:new google.maps.LatLng(latitude2,longitude2),
        zoom:5,
      };
      var uluru = {lat: latitude2, lng: longitude2};
      var map = new google.maps.Map(document.getElementById("maps"),mapProp);
      var marker = new google.maps.Marker({position: uluru, map: map});
    });
});

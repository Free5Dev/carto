/**namespace */
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { ZoomSlider } from 'ol/control';
import VectorSource from 'ol/source/Vector';


/**/
const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 0
    })
});
document.getElementById('btn').addEventListener('click', search);
// function search onload 
function search(e){
    e.preventDefault();
   var searchValue = document.getElementById('search').value;
   var url='http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine='+searchValue+'&f=json';
    fetch(url)
    .then((res) => res.json())
    .then((data) =>{
      document.getElementById('address').innerHTML="Departement: "+data.candidates[0].address;
      console.log(data['candidates'][0]);
      console.log(data.candidates[0].extent);
      // 
      document.getElementById('zoom').addEventListener('click', function(e){
        e.preventDefault();
        map.getView().fit([data.candidates[0].extent.xmin,data.candidates[0].extent.ymin,data.candidates[0].extent.xmax,data.candidates[0].extent.ymax],{padding:[20, 20, 20, 20]});
      });
      // 
    });
    // console.log(data['candidates'][0].address)
    // document.getElementById('search').value='';
   

}

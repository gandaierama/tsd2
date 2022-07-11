
import 'leaflet/dist/leaflet.css';
import dynamic from "next/dynamic";
import styles from './Map.module.css';

const { MapContainer, TileLayer, Marker } =()=> dynamic(() => import('react-leaflet'), {
  loading: () => <Map />,
})




const Map = () => {
   return (<>
  
    <MapContainer center={[40.505, -100.09]} zoom={13} >
  
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
    <Marker position={[40.505, -100.09]}>
      <i></i>
  </Marker>
</MapContainer></>);
}

export default Map;
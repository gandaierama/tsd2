
import dynamic from "next/dynamic";
const { MapContainer, TileLayer, Marker }  = dynamic(
      () => {
        return import("react-leaflet");
      },
      { ssr: false }
    );



function Map() {
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

export default {Map}
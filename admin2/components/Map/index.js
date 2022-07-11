import dynamic from 'next/dynamic';

function Map = dynamic(() => import('./Map'), {
  ssr: false
}){};

export default Map;
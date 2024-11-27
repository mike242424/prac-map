'use client';

import ReactMapboxGl from 'react-mapbox-gl';

const Home = () => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoicHJvZ3JhbXBhcGkiLCJhIjoiY2xodWlyYTJqMDA2MDNldDNneGZvd2VpZiJ9.Z0ds6k8NUzeRwLniAzsctw',
  });

  const handleMapClick = (map: mapboxgl.Map, e: any) => {
    const { lat, lng } = e.lngLat;
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
  };

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
      onClick={handleMapClick}
    />
  );
};

export default Home;

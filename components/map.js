export default function Map() {
    return (
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.7879574129613!2d75.78679508297269!3d26.85343771170337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c14be34997%3A0x91c9404233ca7d2b!2s28%2C%20Mahavir%20Nagar%2C%20Mahaveer%20Nagar%2C%20Durgapura%2C%20Jaipur%2C%20Rajasthan%20302018!5e0!3m2!1sen!2sin!4v1738846997534!5m2!1sen!2sin"
          width="400"
          height="300"
          allowfullscreen="" 
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    );
  }


// 'use client'
// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// // import Loader from '../components/Loader';

// const containerStyle = {
//   width: '300px',
//   height: '400px'
// };

// const centre = {
//   lat: 37.437041393899676,
//   lng: -4.191635586788259
// };

// const GoogleMapComponent = () => {
//   return (
//     <LoadScript googleMapsApiKey={process.env.Google_Api} loadingElement={<h1>Loading...</h1>}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         centre={centre}
//         zoom={10}
//       >
//         <Marker position={centre} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapComponent;
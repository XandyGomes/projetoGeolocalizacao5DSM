import React, { useState } from 'react'; 
import MapView from 'react-native-maps';  
import useLocation from '../hooks/useLocation'; 

export default function HomeScreen({ navigation }) {  
  const [latitude, setLatitude] = useState(-20.5149138);	
  const [longitude, setLongitude] = useState(-47.4006943);	

  const { coords, errorMsg } = useLocation();	    
	
  return( 
           <MapView
              showsUserLocation={true}		
     	        showsMyLocationButton={false} 	
              toolbarEnabled={false}	
              style={{  
                height: '100%',
                width: '100%',
                position: 'absolute',		
              }}	
              initialRegion={{
                latitude,	
                longitude,	
                latitudeDelta: 0.010,  	
                longitudeDelta: 0.010,	
                ...coords
              }}
            />
  ) 
}

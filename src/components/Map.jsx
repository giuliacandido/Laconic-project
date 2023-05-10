import { useState, useEffect} from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";


export default function Map() {
    const MAP_ID = "38d3d465d83e285a";

    const [position, setPosition] = useState({
        lat: 45.420552,
        lng: -75.678916
    });

    useEffect(() => {
        const windowSize = window.matchMedia("(max-width: 560px)");

        windowSize.addEventListener('change', event => {
            if(event.matches) {
                setPosition({
                    lat: 45.4199902,
                    lng: -75.6859839
                })
            }else {
                setPosition({
                    lat: 45.420552,
                    lng: -75.678916
                })
            }
        }) 

    }, [])

    return (
        <GoogleMap 
            mapContainerStyle={{width: '100%', height: '100%'}}
            center={position}
            zoom={15}
            options={{mapId: MAP_ID, scrollwheel: false, draggable: false, disableDefaultUI: true}}>

            <>
                <MarkerF position={{lat: 45.419926, lng: -75.685651}} />
            </>

        </GoogleMap>
    )
}

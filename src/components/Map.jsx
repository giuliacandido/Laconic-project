import { useState, useEffect} from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";


export default function Map() {
    // let center = {lat: 45.420552, lng:-75.678916 }
    const MAP_ID = "38d3d465d83e285a";

    const [position, setPosition] = useState({
        lat: 45.420552,
        lng: -75.678916
    });

    useEffect(() => {
        const mediaQuery = '(max-width: 560px)';
        const windowSize = window.matchMedia(mediaQuery);

        windowSize.addEventListener('change', event => {
            if(event.matches) {
                console.log('o que está acontecendo?')
                setPosition({
                    lat: 45.4199902,
                    lng: -75.6859839
                })
            }else {
                console.log('voltou ao normal')
                setPosition({
                    lat: 45.420552,
                    lng: -75.678916
                })
            }
            // return () => {
            //     windowSize.removeEventListener('change', () => {
            //         setPosition()
            //     })
            // }
        })
    }, [])

    



    

    // window.addEventListener('resize', () => {
    //     if(window.matchMedia("(max-width: 560px)").matches) {
    //         // alert('chegou nesse tamanho')
    //         setPosition({
    //             lat: 45.418846, 
    //             lat: 45.418846,
    //         })
    //         console.log('oque está acontecendo?')
    //     }
    // })


    // window.addEventListener('resize', () => {
    //     if (window.matchMedia("(max-width: 560px)").matches) {
    //         center = {lat: 45.418856, lng: -75.681630}
    //         console.log('deu certo');
    //       } 
    // })

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

import { useEffect, useState } from 'react';
import { getGift } from '../helpers/getGifts';


export const useFetchGifts = ( category ) => {

    const  [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGift( category )
            .then(img => {
                setTimeout( ()=>{
                    setState({
                        data: img,
                        loading: false
                    })
                }, 3000)
            });
    }, [category]);

    return state;
}
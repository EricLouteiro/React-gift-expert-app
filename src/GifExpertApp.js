
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

const GifExpertApp = () => {


    const [categories, setCategory] = useState(['One Punch', 'Rick&Morty'])
    
    // const handleAdd = () => {
    //     // setCategory([...categories, 'hunter Naruto']);

    //     setCategory( categories => [...categories, 'hunter Naruto' ])
    // }
    
    return (
     
        <>

            <h2>GifExpertApp</h2>
            <AddCategory setCategory={ setCategory }/>
            <hr/>

            <ol>

                {
                    categories.map( category => (
                        <GiftGrid 
                            key={category}
                            category={category}/>
                    ))
                }

            </ol>
        </>
    )
}

export default GifExpertApp;

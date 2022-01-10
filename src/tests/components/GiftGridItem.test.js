import React from 'react'
import { shallow } from 'enzyme';
import { GiftGridItem } from '../../components/GiftGridItem';

describe('Pruebas en giftGridItem', () => {
    

    const title = 'Un título';
    const url = 'http://localhost.com';
    let wrapper = shallow( 
        <GiftGridItem 
            url={url}
            title={title}    
        />);

    test('debe de mostrar el componente correctamente', () => {
       

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el titulo', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    });

    test('debe de tener la imagen igual al url y alt ', () => {
        
        const img = wrapper.find('img');

        console.log(img)
        

        expect( img.prop('src') ).toBe( url );
        expect( img.prop( 'alt') ).toBe( title );
    });

    test('debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');

        // console.log();

        expect( div.hasClass('animate__fadeInDown') ).toBe( true );
    });
    
    
});

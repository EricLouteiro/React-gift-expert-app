import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifts } from '../../hooks/useFetchGifts';
jest.mock('../../hooks/useFetchGifts');


describe('Pruebas en el <GifGrid />', () => {

    const category = 'One Punch';


    test('debe de mostrarse correctamente', () => {

        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GiftGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifts.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GiftGrid category={ category } /> );
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GiftGridItem').length ).toBe( gifs.length );
    })
    
})

import React from 'react'
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AppCategory />', () => {
    
    const setCategory = jest.fn();
    let wrapper = shallow( <AddCategory setCategory={setCategory} />)
    

    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategory={setCategory} />)
    })
    
    
    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja del texto', () => {
        
        const input = wrapper.find('input');

        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('No debe de llamar el posteo on submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} } )

        expect( setCategory ).not.toHaveBeenCalled()
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola mundo'
        wrapper.find('input').simulate('change', {target: { value }})

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategory ).toHaveBeenCalled();
        expect( setCategory ).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value') ).toBe('');

    });
    
    
    
    
})


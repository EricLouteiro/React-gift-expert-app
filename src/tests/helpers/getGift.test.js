import { getGift } from "../../helpers/getGifts"

describe('Pruebas en getGifts', () => {
    
    test('debe de traer una cantidad de giftis ', async () => {
        
       const result = await getGift('onepunch');

       expect(result.length).toBe(10);
    });

    test('debe de traer 0 elementos ', async() => {
        
        const result = await getGift('')

        expect(result.length).toBe(0);
    });
        
    
})

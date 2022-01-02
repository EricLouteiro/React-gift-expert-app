

export const getGift = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=RraQhFryndIMZlN8Z0633eAiuoLe9XR1`

    const resp = await fetch(url);
    const { data } = await resp.json()

    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    return gifts;
    
    // console.log(gifts)
}
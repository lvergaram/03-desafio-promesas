const API_URL = 'https://jsonplaceholder.typicode.com/photos'

const getAlbumListrByUrl = async (url,cantidad=1) => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        const albumList = data.slice(0,cantidad)
        console.log(albumList)
    } catch(err){
        console.log(err)
    }
}

getAlbumListrByUrl(API_URL,20)
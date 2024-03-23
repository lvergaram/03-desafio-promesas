const API_URL = 'https://jsonplaceholder.typicode.com/photos'

const getAlbumListrByUrl = async (url, cantidad = 1) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const albumList = data.slice(0, cantidad)
        albumList.forEach(album => { console.log(album) })
    } catch (err) {
        console.log(err)
    }
}

const trySendInfo = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('información enviada....')
        }, 3000)
    })
}

const sendInfo = async() => {
    const mgsSended = await trySendInfo()
    console.log(mgsSended)
}

getAlbumListrByUrl(API_URL, 20)
sendInfo()

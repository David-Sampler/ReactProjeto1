

export const loadPost = async ()=>{
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const postPhoto = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, allPhoto] = await Promise.all([postsResponse, postPhoto])

    const postJson = await posts.json();
    const Photo = await allPhoto.json()

    const postAndphoto = postJson.map((post, index) => {

      return { ...post, cover: Photo[index].url }

    })

    return postAndphoto
}
async function fetchApi(params = '') {
    console.log('hello')
    return fetch(`https://hacker-news.firebaseio.com/v0/${params}`, {
        headers: {
            'Content-Type': 'application/json',
          }, 
    }).then(async data => {
        return await data.json()
    })
}

export default fetchApi
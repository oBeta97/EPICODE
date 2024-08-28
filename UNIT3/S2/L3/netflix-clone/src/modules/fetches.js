const getFilms = async (searchString) => {

    fetch('http://www.omdbapi.com/?apikey=66a19e9&s=' + searchString)
        .then(response => {
            if (response.ok) {
                // la chiamata ha tornato 200
                return response.json()
            } else {
                // la chiamata ha tornato 400, 401, 403, 404, 500
                throw new Error('La chiamata non è andata a buon fine')
            }
        })
        .then(searchObj => {
            console.log(searchObj);

            return searchObj;
        })
        .catch(error => {
            console.error(error);
        })

}

export { getFilms };
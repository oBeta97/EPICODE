// CREATE

// READ

const getBookComments = (bookId) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3Mjk3NTI4YWI5NjAwMTU2NjRmMDgiLCJpYXQiOjE3MjQzMjgzMDksImV4cCI6MTcyNTUzNzkwOX0.luBPQ1KaA-TY0VDGkkeLx8G7NIYOaJGorlrpGRasgdE"
        }
    })
        .then((response) => {
            if (response.ok) {
                // la chiamata ha tornato 200
                return response.json()
            } else {
                // la chiamata ha tornato 400, 401, 403, 404, 500
                throw new Error('La chiamata non è andata a buon fine')
            }
        })
        .then((bookComments) => {
            console.log(bookComments);
            return bookComments;
        })
        .catch((error) => {
            console.error(error);
            this.setState({
                isLoading: false,
                fetchError: true
            })
        })
}

// UPDATE

// DELETE



export {getBookComments};
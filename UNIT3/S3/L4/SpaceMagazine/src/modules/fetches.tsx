import { ApiResponse, Article } from "./interfaces";

export const getNews = (URL:string): Promise<ApiResponse> => {
    return (
        fetch(URL)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Errore nel recupero dei libri')
            }
        })
        .then((news) => {
            console.log(news)
            return news
        })
        .catch((err) => {
            console.error(err)
        })
    );
}


export const getSingleNews = (URL:string): Promise<Article> => {
    return (
        fetch(URL)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Errore nel recupero dei libri')
            }
        })
        .then((news) => {
            console.log(news)
            return news
        })
        .catch((err) => {
            console.error(err)
        })
    );
}
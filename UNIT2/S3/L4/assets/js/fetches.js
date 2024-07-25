async function GetImages(searchWord){

    const pexelConnectionString = 'https://api.pexels.com/v1/search';


    return await fetch(pexelConnectionString + `?query=${searchWord}&size=medium&orientation=square`,
        {
            method: 'GET',
            headers: {
                Authorization: "O2z8Lxm4xNKq9BmI1gTsM9F1PBCAjPl2tQ5nwUyYT2DmiOtRdkk2gV2l"
            }
        }
    ).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Bad response');

        return promise.json();
    }).
    then(function(images){
        return images;
    }).
    catch(function(err){
        alert('fetch didn\'t work')
        console.log(err);
        return null;
    });

}


async function GetImage(imageId){

    const pexelConnectionString = `https://api.pexels.com/v1/photos/${imageId}`;


    return await fetch(pexelConnectionString,
        {
            method: 'GET',
            headers: {
                Authorization: "O2z8Lxm4xNKq9BmI1gTsM9F1PBCAjPl2tQ5nwUyYT2DmiOtRdkk2gV2l"
            }
        }
    ).
    then(function(promise){
        if(!promise.ok)
            throw new Error('Bad response');

        return promise.json();
    }).
    then(function(images){
        return images;
    }).
    catch(function(err){
        alert('fetch didn\'t work')
        console.log(err);
        return null;
    });

}
window.addEventListener('load', function () {

    const postits = document.getElementsByClassName('postit');

    let i = 0;

    const myInterval = setInterval(function (){
            if(i < postits.length ){
                const targetClassList = postits[i].classList;
                console.log(targetClassList.classList);
                
                if (targetClassList.contains('rotate-left'))
                    targetClassList.add('pin-rotate-left');
                else
                    targetClassList.add('pin-rotate-right');
                
                i++
            }
            else
                clearInterval(myInterval)
        },
        1500
    )

})
const ps = document.querySelectorAll('p');


for (let i = 0, targetDiv = ps[i];
     i < ps.length;
     i++, targetDiv = ps[i]
) {
    targetDiv.innerText = 'questo è il p nr: ' + i;
}
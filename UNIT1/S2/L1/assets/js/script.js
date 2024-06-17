let a = 1;
console.log('a: ',a);
console.log('tipo a: ',typeof(a));

let b = document.querySelector('#ciao');
console.log('pre: ', b.innerText);

b.innerText += ' come stai?';
console.log('post: ', b.innerText);


true ? alert('ciao') : alert('come stai');
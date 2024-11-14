let add=document.querySelector('.add');
let plus=document.querySelector('.plus');
let close=document.querySelector('.close');
let alphabet=document.querySelector('.alphabet');
let input=document.querySelector('input');
let zablack=document.querySelector('.zablack');
let zagray=document.querySelector('.zagray');
let azblack=document.querySelector('.azblack')
close.addEventListener('mouseover',()=>{
    close.src ='./pictures/purplex.svg';
});
close.addEventListener('mouseout',()=>{
    close.src='./pictures/deletebtn.svg';
});
alphabet.addEventListener('mouseenter',()=>{
    alphabet.classList.add('none');
    azblack.classList.remove('none');
    zagray.classList.add('none');
})
alphabet.addEventListener('mouseleave',()=>{
    alphabet.classList.remove('none');
    azblack.classList.add('none');
})
zagray.addEventListener('mouseover',()=>{
    zagray.classList.add('none');
    zablack.classList.remove('none');
})
zablack.addEventListener('mouseout',()=>{
    zagray.classList.remove('none');
    zablack.classList.add('none');
})
azblack.addEventListener('click',()=>{
    alphabet.classList.add('none')
    azblack.classList.add('none');
    zablack.classList.remove('none');
})
zablack.addEventListener('click',()=>{
    zablack.classList.add('none');
    alphabet.classList.remove('none');
})

add.addEventListener('click',()=>{
    
})
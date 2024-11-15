let add=document.querySelector('.add');
let plus=document.querySelector('.plus');
let close=document.querySelector('.close');
let alphabet=document.querySelector('.alphabet');
let input=document.querySelector('input');
let zablack=document.querySelector('.zablack');
let zagray=document.querySelector('.zagray');
let azblack=document.querySelector('.azblack')
let list=document.querySelector('.list')
let olList=document.querySelector('ol');
let inp=document.querySelector('.inp');
close.addEventListener('mouseover',()=>{
    close.src ='./pictures/purplex.svg';
});
close.addEventListener('mouseout',()=>{
    close.src='./pictures/deletebtn.svg';
});
close.addEventListener('click',()=>{
    input.value='';
})
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
function sortListAZ(){
    let sorting=Array.from(olList.children);
    sorting.sort((a,b)=>a.textContent.localeCompare(b.textContent));
    olList.textContent='';
    sorting.forEach(item=>olList.appendChild(item));
}
function sortListZA(){
    let sorting=Array.from(olList.children);
    sorting.sort((a,b)=>b.textContent.localeCompare(a.textContent));
    olList.textContent='';
    sorting.forEach(item=>olList.appendChild(item));
}
azblack.addEventListener('click',()=>{
    sortListAZ();
    alphabet.classList.add('none')
    azblack.classList.add('none');
    zablack.classList.remove('none');
})
zablack.addEventListener('click',()=>{
    sortListZA();
    zablack.classList.add('none');
    alphabet.classList.remove('none');
})

add.addEventListener('click',()=>{
    let inpvalue=input.value.trim();
    if (inpvalue!=''){
        list.classList.remove('none')
        let items=document.createElement('li');
        items.classList.add('item');

        olList.appendChild(items);
        let spanElement=document.createElement('span');
        spanElement.classList.add('spanEl')
        spanElement.textContent=inpvalue;
        items.appendChild(spanElement);
        let closebutton=document.createElement('img');
        closebutton.classList.add('cls');
        closebutton.src='./pictures/deletebtn.svg';
        items.append(closebutton);
        function sortListAZ(){
    let sorting=Array.from(olList.children);
    items.sort((a,b)=>a.textContent.localCompare(b.textContent));
    olList.textContent='';
    sorting.forEach(item=>olList.appendChild(item));
}

        
input.value='';
inp.classList.add('none');
        // items.insertAdjacentHTML('afterend', '<img src="./pictures/deletebtn.svg" class="closebtn" alt="Close/Delete">');
        //     let imgXGray = listItem.nextSibling;
    closebutton.addEventListener('click',()=>{
    olList.removeChild(items);
    if(olList.children.length===0){
        list.classList.add('none');
        inp.classList.remove('none')
    }
});
closebutton.addEventListener('mouseover',()=>{
    closebutton.src ='./pictures/purplex.svg';
});
closebutton.addEventListener('mouseout',()=>{
    closebutton.src='./pictures/deletebtn.svg';
});
// УДАЧИИИИИИ!!!!
}
});
plus.addEventListener('click',()=>{
    inp.classList.toggle('none');
    input.value=''
    if(olList.children.length===0){
        inp.classList.remove('none');

    }
})

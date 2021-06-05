
var name1 = document.querySelector('.client-name')
var profession = document.querySelector('.profession');
var arrow = document.getElementsByClassName('arrow-box');
var l= 0;
arrow[1].onclick = ()=>{
    l++;
    
    if(l==0){name1.innerHTML = 'STEVE FONSI';
            profession.innerHTML='Web Designer'}
    if(l==1){name1.innerHTML = 'DANIEL VEBAR';
            profession.innerHTML='Seo Analyst'}
    if(l==2){name1.innerHTML = 'PAUL MITCHEL';
            profession.innerHTML='Web Developer'}
    if(l>2){l=2}
    
}
arrow[0].onclick = ()=>{
    l--;
    if(l==1){name1.innerHTML = 'DANIEL VEBAR';
            profession.innerHTML='Seo Analyst'}
    if(l==2){name1.innerHTML = 'PAUL MITCHEL';
            profession.innerHTML='Web Developer'}
    if(l==0){name1.innerHTML = 'STEVE FONSI';
            profession.innerHTML='Web Designer'}
    if(l<0){l=0}
    
}
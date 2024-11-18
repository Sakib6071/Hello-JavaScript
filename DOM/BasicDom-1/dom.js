const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border='2px solid steelblue'
    section.style.marginBottom='5px'
    section.style.fontSize='30px'
    section.style.backgroundColor='yellow'

}
const custom = document.getElementById('last');
custom.style.backgroundColor='skyblue'
custom.classList.add('fontColor')
custom.classList.remove('bold')



/* Nodelist */
const clubs=document.getElementById('clubList')
const li = document.createElement('li')
li.innerText='Liverpool'
clubs.appendChild(li);
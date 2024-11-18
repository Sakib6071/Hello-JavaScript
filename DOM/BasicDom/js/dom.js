/* const liCollection = document.getElementsByTagName('li');

        for(const item of liCollection){
            console.log(item.innerText);
        } */
const playerCollection = document.getElementById('fav-players');
console.log(playerCollection.innerText);


const impUserName = document.getElementsByClassName('userName');
for(const name of impUserName){
    console.log(name.innerText);
}

document.querySelectorAll('.short-bio p')[0].style.color='blue';


// const resultElement = document.getElementById("result"); //id html

// Nome e Cognome passeggero
const userNameinput = document.getElementById('name');

userNameinput.addEventListener('click' , function (){
    const username = userNameinput.value;
    console.log(userNameinput);
});

// Distanza da percorrere
const userTravelDist = document.getElementById('travel');

userTravelDist.addEventListener('click' , function (){
    const distance = userTravelDist.value;
    console.log(userTravelDist);
});

// Anni passeggero
const userAge = document.getElementById('age');

userAge.addEventListener('click' , function (){
    const userage = userAge.value;
    console.log(userAge);
});
// Bottone genera
const userGeneratebtn = document.getElementById('generate-btn');
userGeneratebtn.addEventListener('click' , function(){

});
let price = travel * 0.21 ;

// if (age < 18){ // in caso di minorenne riceve sconto
//     alert('Hai uno sconto del 20%');
//     const discountPrice = 20 ;
//     console.log(discountPrice);
//     const discount = price * discountPrice / 100;
//     console.log (discount);
//     const finalPrice = price - discount;
//     console.log (finalPrice);
//     resultElement.innerText = 'Prezzo del biglietto:'+ finalPrice + '€' // stampa prezzo
// }
// else if (age >= 65){ // in caso di over 65 riceve sconto
//     alert('Hai uno sconto del 40%');
//     const discountPrice = 40 ;
//     console.log(discountPrice);
//     const discount = price * discountPrice / 100;
//     console.log (discount);
//     const finalPrice = price - discount;
//     console.log (finalPrice);
//     resultElement.innerText = 'Prezzo del biglietto:'+ finalPrice + '€' // stampa prezzo
// }else{ // non riceve nessuno sconto
//     alert('Prezzo del biglietto');
//     resultElement.innerText = 'Prezzo del biglietto:'+ price + '€' // stampa prezzo
// }
// console.log(age);





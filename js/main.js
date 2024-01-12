// const resultElement = document.getElementById("result"); //id html

// Nome e Cognome passeggero
const userNameinput = document.getElementById("name");

// Distanza da percorrere
const userTravelDist = document.getElementById("travel");

// Anni passeggero
const userAge = document.getElementById("age");

const userPrice = document.getElementById("price");

// Bottone genera
const userGeneratebtn = document.getElementById("generate-btn");

userGeneratebtn.addEventListener("click", function () {
  let kmprice = userTravelDist.value * 0.21;
  let price = userPrice.value;
  let discountPrice;
  let discount;
  let finalPrice = kmprice;
  let name = userNameinput.value;
  let age = userAge.value;

  userPrice.innerText = "Prezzo del biglietto:" + kmprice + "€"; // stampa prezzo
 

  if (age < 18) {
    // in caso di minorenne riceve sconto
    discountPrice = 20;
    console.log(discountPrice);
    discount = (kmprice * discountPrice) / 100;
    console.log(discount);
    finalPrice = kmprice - discount;
    console.log(finalPrice);
  } else {
    if (age >= 65) {
      // in caso di over 65 riceve sconto
      discountPrice = 40;
      console.log(discountPrice);
      discount = (kmprice * discountPrice) / 100;
      console.log(discount);
      finalPrice = kmprice - discount;
      console.log(finalPrice);
    }
  }
});

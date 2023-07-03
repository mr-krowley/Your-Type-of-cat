// подтягиваем данные для карточек
import { data } from "./cat.js";

const containerCard = document.querySelector(".containerCard");
const input = document.querySelector("input");




function createCard(obj) {
  //функция создаем саму карточу котика

  let card = document.createElement("div");
  card.classList.add("catCard");

  let image = document.createElement("img");
  image.classList.add("image");
  image.setAttribute("src", obj.img);



  let title = document.createElement("p"); //создаем текст название котика в карточки 
  title.classList.add("catName"); //обращение к стилям
  title.textContent = obj.title; // достаем название котика

  card.append(image, title);
  containerCard.append(card);
}


function reviewCard(arr) {
  // функция перебора элементов из  передоваемого data она же и вызывает метот отрисовки createCard
  arr.forEach(function (elem) {
    createCard(elem);
  });
} 

function searchFilter(event) {
  // функция обработчик поисковой строки сравнение ввода с ключевыми словами карточек
  let value = event.target.value.toLowerCase().trim();
  let filterDate = data.filter(
    (card) =>
      card.keywords.toLowerCase().includes(value)
  );
  containerCard.innerHTML = "";
  reviewCard(filterDate);
  console.dir(value);
  console.log("работаю");
}


(function main() {
  // самовызывающаяся функция main точкa входа в програму
  reviewCard(data);
})();





//прослушка поиска
input.addEventListener("input", searchFilter);
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click', getRandomCat)
dog_btn.addEventListener('click', getRandomDog)

/*

function getRandomCat() {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(data => {
    cat_result.innerHTML = `<img src="${data[0].url}"/>`
  })
}

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => {
    dog_result.innerHTML = `<img src="${data.message}"/>`
  })
} */


function getRandomCat() {
  axios.get('https://api.thecatapi.com/v1/images/search')
  .then(res => {
    cat_result.innerHTML = `<img src="${res.data[0].url}"/>`
  })
}

function getRandomDog() {
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then(res => {
    dog_result.innerHTML = `<img src="${res.data.message}"/>`
  })
}

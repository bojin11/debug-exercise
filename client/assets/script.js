

function init() {
  const form = document.querySelector('#quotes-form');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(`http://localhost:3000/quotes/random`)
      .then(response => response.json()) 
      .then(json => document.getElementById('quote-message').innerHTML = json.quote)
  })
}


init()



const input = document.getElementbyId('input');
const form = document.getElementbyId('myForm');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (input.value === '' || input.value == null) {
    messages.push("Whoops, make sure it's an email");
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = message.join(', ')
  }
})

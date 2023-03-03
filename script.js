const textElement = document.getElementById('evaluatedText')
const h3Element = document.getElementById('wordCount')

function handelInput(e){
  const sentence = e.target.value
  const match = sentence.match(/\S+/ig).length;
  h3Element.textContent = match;
}
textElement.addEventListener('input',handelInput)

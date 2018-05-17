// Variables globales

var textArea = document.getElementById('input');
var textContainer = document.getElementById('containerTeweets');
var button = document.getElementById('btn-agregar');
var section = document.getElementById('sectionTweets');
var maxLength = textArea.getAttribute('maxlength');
var number = maxLength - textArea.value.length;

button.addEventListener('click', function saveText(event) {
  if (textArea.value) {
    var paragraph = document.createElement('p');
    paragraph.textContent = textArea.value;
    textArea.value = '';
    textContainer.appendChild(paragraph);
    textContainer.classList.add('containerText');
    paragraph.classList.add('text');
  } else if(textArea.value.length == 0 || textArea == null) {
      alert('Debes ingresar un mensaje');
      return false;
    };
});

// var trash = document.getElementById('i');
// trash.classList.add('fa', 'fa-trash', 'trash');


const textarea = document.body.querySelector('#review');

let textareaTextLength = 0;

textarea.addEventListener('focusout', (e) => {
  textareaTextLength = e.target.value.length;
  document.body.querySelector('p') ? document.body.querySelector('p').remove() : 0;
  let text = document.createElement('p');
  text.innerHTML = `Количество символов в textarea - ${textareaTextLength}`;
  textarea.after(text);
})

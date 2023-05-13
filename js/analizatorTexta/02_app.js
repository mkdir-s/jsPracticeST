const textarea = document.body.querySelector('#review');
const subtextforSymbols = document.body.querySelector('#review__symbols');
const subtextforWords = document.body.querySelector('#review__words');

let textareaLength = 0;
let textareaWordsLength = 0;

textarea.addEventListener('focusout', (e) => {
  countSymbolsInInput(e);
  countWordsInInput(e);
})


function countSymbolsInInput(e) {
  textareaLength = e.target.value.length;
  subtextforSymbols.innerHTML = `Количество символов в textarea - ${textareaLength}`;
}

function countWordsInInput(e) {
  textareaLength > 0 ? textareaWordsLength = e.target.value.split(' ').length : 0;
  subtextforWords.innerHTML = `Количество слов в textarea - ${textareaWordsLength}`;
}
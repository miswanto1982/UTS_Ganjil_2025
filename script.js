const scriptURL = 'https://script.google.com/macros/s/AKfycbzVIXtjBmqBHwZTSZhujxgXFqsrOOh8R-sRbL1KHz9LeVcHf0QsX4w6HsR0loFFICkfwg/exec';
const form = document.getElementById('quizForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('✅ Jawaban berhasil dikirim!'))
    .catch(error => alert('❌ Gagal mengirim jawaban!'));
  form.reset();

});


<script>
const scriptURL = 'https://script.google.com/macros/s/AKfycbxY5CR05yUXgsYg2UG8_QMZ7QHbG4HvCNRBTV-Pqla7QnbBTnEitsjj6tlRvWbo1cxkVg/exec'; // ganti dengan URL Apps Script baru

document.getElementById('quizForm').addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(e.target)
  })
  .then(response => response.text())
  .then(result => {
    alert('✅ Jawaban berhasil dikirim!\nTerima kasih sudah mengerjakan.');
    e.target.reset();
  })
  .catch(error => {
    console.error('Error!', error);
    alert('❌ Gagal mengirim jawaban. Periksa koneksi internet.');
  });
});
</script>

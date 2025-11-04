<script>
const scriptURL = 'https://script.google.com/macros/s/AKfycbxY5CR05yUXgsYg2UG8_QMZ7QHbG4HvCNRBTV-Pqla7QnbBTnEitsjj6tlRvWbo1cxkVg/exec'; // Ganti dengan URL Web App kamu

const form = document.getElementById('quizForm');

form.addEventListener('submit', e => {
  e.preventDefault(); // supaya tidak reload halaman

  // Kirim data form ke Google Sheets via Apps Script
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form),
    mode: 'no-cors' // 🛡️ Wajib agar bisa kirim dari luar domain Google
  })
  .then(() => {
    alert('✅ Jawaban berhasil dikirim!\nTerima kasih sudah mengerjakan.');
    form.reset(); // Kosongkan form setelah kirim
  })
  .catch(error => {
    console.error('Error:', error);
    alert('❌ Gagal mengirim jawaban! Periksa koneksi internet Anda.');
  });
});
</script>

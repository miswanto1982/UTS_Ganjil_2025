// ✅ URL Google Apps Script kamu — sudah benar dan siap pakai
const scriptURL = 'https://script.google.com/macros/s/AKfycbyHrLk6PpjxRIpXi3160TlY85VbdMVIT7mL6zuXtTtwcX8PI1SRQBiuDVgsPMsPqK_Z/exec';

// Ambil form dengan id quizForm
const form = document.getElementById('quizForm');

// Saat tombol submit diklik
form.addEventListener('submit', e => {
  e.preventDefault(); // supaya tidak reload halaman

  // Kirim data form ke Google Sheets via Apps Script
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      alert('✅ Jawaban berhasil dikirim!\nTerima kasih sudah mengerjakan.');
    } else {
      alert('⚠️ Terjadi kesalahan saat mengirim. Coba lagi nanti.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('❌ Gagal mengirim jawaban! Pastikan koneksi internet stabil.');
  });

  // Kosongkan form setelah kirim
  form.reset();
});



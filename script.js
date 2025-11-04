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
    body: new FormData(form),
    mode: 'no-cors' // 🛡️ WAJIB untuk melewati blokir Google
  })
  .then(() => {
    // Karena no-cors tidak bisa membaca response, langsung anggap sukses
    alert('✅ Jawaban berhasil dikirim!\nTerima kasih sudah mengerjakan.');
    form.reset();
  })
  .catch(error => {
    console.error('Error:', error);
    alert('❌ Gagal mengirim jawaban! Pastikan koneksi internet stabil.');
  });
});

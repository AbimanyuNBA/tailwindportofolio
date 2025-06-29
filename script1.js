// Inisialisasi EmailJS
(function () {
  emailjs.init('t5473TeEaq4epc7YP'); // ganti dengan user ID kamu
})();

// Fungsi kirim email
function sendMail() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validasi input kosong
  if (!name || !email || !subject || !message) {
    Swal.fire({
      icon: 'warning',
      title: 'Lengkapi Semua Data!',
      text: 'Harap isi semua kolom sebelum mengirim pesan.',
    });
    return;
  }

  // Tampilkan loading
  Swal.fire({
    title: 'Mengirim...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  // Kirim email melalui EmailJS
  emailjs.send('service_cirnp0d', 'template_6p4g7qh', {
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(function (response) {
    // Tampilkan success
    Swal.fire({
      icon: 'success',
      title: 'Berhasil Terkirim!',
      text: 'Pesan kamu sudah dikirim.',
      showConfirmButton: false,
      timer: 2000
    });

    // Reset form
    document.getElementById('contactForm').reset();
  }, function (error) {
    console.error('Error sending email:', error);

    Swal.fire({
      icon: 'error',
      title: 'Gagal Terkirim!',
      text: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
    });
  });
}

// Event submit pada form
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah reload
  sendMail(); // Panggil fungsi kirim email
});

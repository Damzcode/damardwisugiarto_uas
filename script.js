document.addEventListener('DOMContentLoaded', function() {
    // Validasi untuk form transaksi
    const transaksiForm = document.getElementById('transaksiForm');
    if (transaksiForm) {
        transaksiForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nama = document.getElementById('nama').value.trim();
            const judul = document.getElementById('judul').value.trim();
            const tanggal = document.getElementById('tanggal').value.trim();
            
            if (!nama) {
                alert('Nama Lengkap harus diisi!');
                return;
            }
            if (!judul) {
                alert('Judul Buku harus diisi!');
                return;
            }
            if (!tanggal) {
                alert('Tanggal Peminjaman harus diisi!');
                return;
            }
            alert('Transaksi berhasil dikirim!');
            // Di sini bisa tambahkan logika untuk menyimpan data, misalnya ke localStorage
        });
    }
    
    // Validasi untuk form login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            if (!username) {
                alert('Username harus diisi!');
                return;
            }
            if (!password) {
                alert('Password harus diisi!');
                return;
            }
            alert('Login berhasil!');
            // Di sini bisa tambahkan logika autentikasi
        });
    }
});
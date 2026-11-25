// Data Array Dummy untuk Fitur Autocomplete Nama
const daftarNama = [
    "Hamizan Rifqi Afandi",
    "Jovan Steve Antony",
    "Budi Santoso",
    "Siti Aminah",
    "Ahmad Fauzi",
    "Rina Wijaya"
];

// Ambil elemen input nama
const inputNama = document.getElementById('nama');

// Buat elemen datalist secara dinamis
const datalist = document.createElement('datalist');
datalist.id = 'list-nama';

// Masukkan data array ke dalam datalist
daftarNama.forEach(nama => {
    let option = document.createElement('option');
    option.value = nama;
    datalist.appendChild(option);
});

// Hubungkan input dengan datalist
document.body.appendChild(datalist);
inputNama.setAttribute('list', 'list-nama');

// Logika saat Form di-submit
document.getElementById('form-registrasi').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
    
    // Mengambil nilai dari form
    const nama = inputNama.value;
    const email = document.getElementById('email').value;
    
    // Simulasi penyimpanan (bisa diganti dengan validasi lanjutan)
    alert(`Berhasil Registrasi!\n\nNama: ${nama}\nEmail: ${email}`);
    
    // Reset form setelah submit
    this.reset();
});
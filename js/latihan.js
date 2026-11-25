// Data dummy kategori dan merk
const dataProduk = {
    "Sport": [
        "Nike",
        "Adidas",
        "Puma",
        "Under Armour",
        "Converse",
        "New Balance"
    ],
    "Running": [
        "Nike",
        "Adidas",
        "Asics",
        "New Balance",
        "On Cloud"
    ],
    "Casual": [
        "Onitsuka Tiger",
        "Converse",
        "Sketcher",
        "New Balance",
        "Nike",
        "vans"
    ],
    "Sandal":[
        "Crocs",
        "Nike",
        "Adidas",
        "Swallow",
        "Pose"
    ]
};

// Ambil elemen dropdown
const selectKategori = document.getElementById('kategori');
const selectMerk = document.getElementById('merk');

// Event listener saat kategori berubah
selectKategori.addEventListener('change', function() {
    const kategoriTerpilih = this.value;

    // Kosongkan pilihan merk sebelumnya
    selectMerk.innerHTML = '<option value="">Pilih Merk</option>';

    if (kategoriTerpilih) {
        // Jika kategori dipilih, aktifkan dropdown merk
        selectMerk.disabled = false;
        
        // Ambil array merk sesuai kategori
        const daftarMerk = dataProduk[kategoriTerpilih];

        // Masukkan opsi merk ke dalam dropdown
        daftarMerk.forEach(function(merk) {
            let option = document.createElement('option');
            option.value = merk;
            option.textContent = merk;
            selectMerk.appendChild(option);
        });
    } else {
        // Jika kategori dikosongkan (pilih default), matikan dropdown merk
        selectMerk.disabled = true;
    }
});
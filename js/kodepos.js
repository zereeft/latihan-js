// Data Dummy (Bisa diganti dengan data asli atau fetch API)
const dataWilayah = {
    "Jawa Timur": {
        "Surabaya": {
            "Gubeng": "60281",
            "Wonokromo": "60241",
            "Sukolilo": "60111"
        },
        "Sidoarjo": {
            "Waru": "61256",
            "Taman": "61257",
            "Candi": "61271"
        },
        "Malang": {
            "Klojen": "65111",
            "Blimbing": "65126",
            "Lowokwaru": "65141"
        }
    },
    "Jawa Barat": {
        "Bandung": {
            "Coblong": "40132",
            "Sukajadi": "40162",
            "Sumur Bandung": "40111"
        },
        "Bogor": {
            "Bogor Tengah": "16121",
            "Bogor Barat": "16111"
        }
    },
    "DKI Jakarta": {
        "Jakarta Pusat": {
            "Gambir": "10110",
            "Menteng": "10310",
            "Tanah Abang": "10210"
        },
        "Jakarta Selatan": {
            "Kebayoran Baru": "12110",
            "Kemang": "12730"
        }
    }
};

// Ambil elemen DOM
const selectProvinsi = document.getElementById('provinsi');
const selectKota = document.getElementById('kota');
const selectKecamatan = document.getElementById('kecamatan');
const formKodepos = document.getElementById('form-kodepos');

// 1. Isi Dropdown Provinsi saat pertama kali dimuat
for (let provinsi in dataWilayah) {
    let option = document.createElement('option');
    option.value = provinsi;
    option.textContent = provinsi;
    selectProvinsi.appendChild(option);
}

// 2. Event Listener saat Provinsi dipilih
selectProvinsi.addEventListener('change', function() {
    // Reset Kota dan Kecamatan
    selectKota.innerHTML = '<option value="">Pilih Kota atau Kabupaten</option>';
    selectKecamatan.innerHTML = '<option value="">Pilih Kecamatan</option>';
    
    // Disable kecamatan
    selectKecamatan.disabled = true;

    const provinsiTerpilih = this.value;

    if (provinsiTerpilih) {
        // Aktifkan dropdown Kota
        selectKota.disabled = false;
        
        // Ambil data kota berdasarkan provinsi
        const daftarKota = dataWilayah[provinsiTerpilih];
        
        // Looping data kota ke dropdown
        for (let kota in daftarKota) {
            let option = document.createElement('option');
            option.value = kota;
            option.textContent = kota;
            selectKota.appendChild(option);
        }
    } else {
        // Jika provinsi dikosongkan, disable kota
        selectKota.disabled = true;
    }
});

// 3. Event Listener saat Kota dipilih
selectKota.addEventListener('change', function() {
    // Reset Kecamatan
    selectKecamatan.innerHTML = '<option value="">Pilih Kecamatan</option>';
    
    const provinsiTerpilih = selectProvinsi.value;
    const kotaTerpilih = this.value;

    if (kotaTerpilih) {
        // Aktifkan dropdown Kecamatan
        selectKecamatan.disabled = false;
        
        // Ambil data kecamatan berdasarkan provinsi dan kota
        const daftarKecamatan = dataWilayah[provinsiTerpilih][kotaTerpilih];
        
        // Looping data kecamatan ke dropdown
        for (let kecamatan in daftarKecamatan) {
            let option = document.createElement('option');
            option.value = kecamatan;
            option.textContent = kecamatan;
            selectKecamatan.appendChild(option);
        }
    } else {
        selectKecamatan.disabled = true;
    }
});

// 4. Event Listener saat form di-submit
formKodepos.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const prov = selectProvinsi.value;
    const kot = selectKota.value;
    const kec = selectKecamatan.value;
    
    if (prov && kot && kec) {
        // Ambil kode pos dari data
        const kodePos = dataWilayah[prov][kot][kec];
        
        // Tampilkan hasil (Bisa diganti dengan manipulasi DOM untuk menampilkan di bawah form)
        alert(`Data Ditemukan!\n\nProvinsi: ${prov}\nKota/Kab: ${kot}\nKecamatan: ${kec}\n\nKode Pos: ${kodePos}`);
    } else {
        alert('Harap lengkapi semua pilihan dropdown!');
    }
});
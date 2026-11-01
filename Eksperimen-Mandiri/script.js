const daftarTugas = document.getElementById("daftarTugas");

daftarTugas.addEventListener("click", function (event) {
    if (event.target.classList.contains("hapus")) {
        event.target.parentElement.remove();
    }
});

const nama = document.getElementById("nama");
const cekNama = document.getElementById("cekNama");
const hasilNama = document.getElementById("hasilNama");

cekNama.addEventListener("click", function () {
    const nilaiNama = nama.value.trim();

    if (nilaiNama.length < 3) {
        hasilNama.textContent =
            "Nama harus memiliki minimal 3 karakter.";
        hasilNama.className = "hasil-gagal";
    } else {
        hasilNama.textContent = "Nama sudah valid.";
        hasilNama.className = "hasil-berhasil";
    }
});

const sesi = document.getElementById("sesi");
const hasilSesi = document.getElementById("hasilSesi");

sesi.addEventListener("change", function () {
    if (sesi.value === "") {
        hasilSesi.textContent =
            "Sesi yang dipilih: Belum ada";
    } else {
        hasilSesi.textContent =
            "Sesi yang dipilih: " + sesi.value;
    }
});

const teksRahasia = document.getElementById("teksRahasia");
const tombolTeks = document.getElementById("tombolTeks");

tombolTeks.addEventListener("click", function () {
    teksRahasia.classList.toggle("sembunyi");

    if (teksRahasia.classList.contains("sembunyi")) {
        tombolTeks.textContent = "Tampilkan Teks";
    } else {
        tombolTeks.textContent = "Sembunyikan Teks";
    }
});

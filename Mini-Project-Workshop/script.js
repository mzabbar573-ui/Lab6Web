const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");

const hitungKarakter = document.getElementById("hitungKarakter");
const pilihanSesi = document.getElementById("pilihanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const ringkasanWorkshop = document.getElementById("ringkasanWorkshop");

namaWorkshop.addEventListener("input", function () {
    hitungKarakter.textContent = namaWorkshop.value.length;
});

sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        pilihanSesi.textContent = "Sesi yang dipilih: Belum ada";
    } else {
        pilihanSesi.textContent =
            "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});

formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanWorkshop.textContent = "Nama wajib diisi.";
        pesanWorkshop.style.color = "red";
        ringkasanWorkshop.textContent = "";
    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent = "Masukkan email yang valid.";
        pesanWorkshop.style.color = "red";
        ringkasanWorkshop.textContent = "";
    } else if (sesi === "") {
        pesanWorkshop.textContent = "Silakan pilih sesi workshop.";
        pesanWorkshop.style.color = "red";
        ringkasanWorkshop.textContent = "";
    } else {
        pesanWorkshop.textContent = "Pendaftaran workshop berhasil!";
        pesanWorkshop.style.color = "green";

        ringkasanWorkshop.textContent =
            "Nama: " + nama +
            " | Email: " + email +
            " | Sesi: " + sesi;
    }
});

formWorkshop.addEventListener("reset", function () {
    pesanWorkshop.textContent = "";
    ringkasanWorkshop.textContent = "";
    hitungKarakter.textContent = "0";
    pilihanSesi.textContent = "Sesi yang dipilih: Belum ada";
});

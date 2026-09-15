const form = document.getElementById("formPendaftaran");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const kelas = document.getElementById("kelas");
const jurusan = document.getElementById("jurusan");
const kegiatan = document.getElementById("kegiatan");
const syarat = document.getElementById("syarat");
const tombol = document.getElementById("btndaftar");

const hasil = document.getElementById("hasil");

kelas.addEventListener("change", function (){
    kelas.classList.add("selected");
});

jurusan.addEventListener("change", function (){
    jurusan.classList.add("selected");
});

syarat.addEventListener("change", function () {
    tombol.disabled = !syarat.checked;
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("errornama").textContent = "";
    document.getElementById("erroremail").textContent = "";
    document.getElementById("errorkelas").textContent = "";
    document.getElementById("errorjurusan").textContent = "";
    document.getElementById("errorkegiatan").textContent = "";
    
    nama.style.border = "";
    email.style.border = "";
    kelas.style.border = "";
    jurusan.style.border = "";
    kegiatan.style.border = "";

    hasil.innerHTML = "";

    let valid = true

//Nama//
    if (nama.value.trim() === "") {
        console.log("validasi nama jalan")

        document.getElementById("errornama").textContent = "*Nama Minimal 3 Karakter.";
        nama.style.border = "2px solid red";
        valid = false;
    }
    else if (nama.value.trim().length < 3){
        document.getElementById("errornama"). textContent = "*Nama Minimal 3 Karakter.";
        nama.style.border = "2px solid red";
        valid = false; 
    }

//Email//
    if(email.value.trim() === "") {
        document.getElementById("erroremail").textContent = "*Email tidak boleh kosong.";
        email.style.border = "2px solid red";
        valid = false;
    }
    else if (!email.value.includes("@")) {
        document.getElementById("erroremail"). textContent = "*Email harus mengandung karakter @.";
        email.style.border = "2px solid red";
        valid = false; 
     }

//Kelas//
if(kelas.value.trim() === "") {
        document.getElementById("errorkelas").textContent = "*Silahkan pilih kelas.";
        kelas.style.border = "2px solid red";
        valid = false;
    }

//jurusan//
if(jurusan.value === "") {
        document.getElementById("errorjurusan").textContent = "*Silahkan pilih jurusan.";
        jurusan.style.border = "2px solid red";
        valid = false;
}

//kegiatan//
if(kegiatan.value.trim() === "") {
        document.getElementById("errorkegiatan").textContent = "*Kegiata tidak boleh kosong.";
        kegiatan.style.border = "2px solid red";
        valid = false;
    }

//syarat//
if (!syarat.checked) {
    hasil.innerHTML = "Anda harus menyetujui syarat & ketentuan.";
    hasil.style.color = "red";
    valid = false;
}

//tombol//
if (valid) {
    hasil.innerHTML = `<strong>Pendaftaran berhasil!</strong>
    <br></br>
    nama: ${nama.value}
    <br>
    email: ${email.value}
    <br>
    Kelas: ${kelas.value}
    <br>
    Jurusan: ${jurusan.value}
    <br>
    Kegiatan: ${kegiatan.value} `;

    hasil.style.color = "White";

    form.reset ();
    kelas.classList.remove ("selected");
    jurusan.classList.remove ("selected");
    tombol.disabled = true;

    console.log("Data_pendaftaran;", {
        nama: nama.value,
        email: email.value,
        kelas: kelas.value,
        jurusan: jurusan.value,
        kegiatan: kegiatan.value
    })
}
});
console.log("Web Portofolio siap!");
// 1. Let & Const
const namaWeb = "Portofolio Interaktif";
let jumlahPengunjung = 100;

// 2. Arrow Function & 3. Template Literals
const sapaPengunjung = (nama) => {
    return `Selamat datang ${nama} di ${namaWeb}! Kamu pengunjung ke-${jumlahPengunjung + 1}.`;
};

// 4. Destructuring Assignment
const profil = {
    username: "jawier-cmd",
    role: "Web Developer"
};
const { username, role } = profil;

// 5. Array Methods (map & filter)
const proyek = [
    { nama: "Proyek HTML CSS", selesai: true },
    { nama: "Proyek Git", selesai: true },
    { nama: "Proyek JS ES6+", selesai: false }
];

const proyekSelesai = proyek
    .filter(item => item.selesai)
    .map(item => item.nama);

// Menampilkan Hasil
console.log(sapaPengunjung(username));
console.log(`Role: ${role}`);
console.log("Proyek yang selesai:", proyekSelesai);

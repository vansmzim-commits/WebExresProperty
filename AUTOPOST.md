# Posting blog otomatis (harian)

Dijalankan oleh tugas terjadwal Claude setiap hari. Langkah:

1. Ambil topik teratas yang belum [x] di `blog/_TOPIK.md`. Topik di bagian **Prioritas** didahulukan; masing-masing punya kata kunci target dari riset Keyword Planner 24 Nov 2026.
2. Riset singkat di web (sumber resmi/terpercaya: BPN/ATR, peraturan.go.id, hukumonline, detik properti, Kompas, PUPR). Jangan menyalin teks; tulis ulang dengan kata sendiri.
3. Tulis artikel bahasa Indonesia 600–900 kata, nada ramah-profesional, untuk calon pembeli kavling di Sukabumi. Struktur: paragraf pembuka, 3–6 subjudul `<h2>`, satu kotak `<div class="note">` ringkasan, tanpa `<h1>`.
   - JANGAN mengarang data Exres (harga, status sertifikat, promo, jumlah kavling terjual, testimoni). Layanan Exres yang boleh disebut (dari Pak Irpan): terima beres, semua diurus sampai sertifikat SHM terbit atas nama pembeli (survei, dokumen ditunjukkan sebelum bayar, AJB di notaris/PPAT, balik nama di Kantor Pertanahan), dan opsi dibangunkan rumah. Tutup artikel dengan kalimat yang menegaskan hal ini bila relevan.
   - Angka hukum/biaya hanya jika ada di sumber; sebut dasar aturannya. Jangan menjanjikan keuntungan investasi.
   - SEO: pakai kata kunci target persis di judul (title), di kalimat pertama, dan di satu subjudul `<h2>`. Description ≤160 karakter juga memuatnya.
   - Tautkan 1–2 halaman kawasan yang relevan, misalnya `<a href="../../kawasan/pesona-limusnunggal.html">Pesona Limusnunggal</a>` atau `<a href="../../kawasan/">daftar kawasan</a>`. Untuk topik umum, tautkan ke daftar kawasan.
   - Kata yang dipakai pembeli Sukabumi: "perumahan", "tanah", "kavling", nama wilayah (Cibeureum, Baros, Jayaraksa, Limusnunggal). Hindari menyasar "butuh uang" dan "subsidi".
4. Pilih 1 foto gratis dari Pexels (pexels.com) yang relevan (utamakan suasana Indonesia/tropis, tanpa wajah close-up dan tanpa merek). Pakai URL `https://images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?auto=compress&cs=tinysrgb&w=1260` dan simpan halaman fotonya di `image_source`.
5. Simpan sebagai `blog/_posts/<YYYY-MM-DD>-<slug>.json` dengan kunci: slug, tag (LEGALITAS / PANDUAN / BANGUN RUMAH / BIAYA / KAWASAN / TIPS), title, description (≤160 karakter), date, body_html, image, image_alt, image_source, image_credit ("Pexels").
6. Jalankan `python3 scripts/build_blog.py`, tandai topik [x] di `_TOPIK.md`.
7. Commit ke `main` dan push.

VPS mengambil perubahan otomatis lewat cron `git pull` (lihat README).

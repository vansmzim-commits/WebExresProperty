# Posting blog otomatis (harian)

Dijalankan oleh tugas terjadwal Claude setiap hari. Langkah:

1. Ambil topik teratas yang belum [x] di `blog/_TOPIK.md`.
2. Riset singkat di web (sumber resmi/terpercaya: BPN/ATR, peraturan.go.id, hukumonline, detik properti, Kompas, PUPR). Jangan menyalin teks; tulis ulang dengan kata sendiri.
3. Tulis artikel bahasa Indonesia 600–900 kata, nada ramah-profesional, untuk calon pembeli kavling di Sukabumi. Struktur: paragraf pembuka, 3–6 subjudul `<h2>`, satu kotak `<div class="note">` ringkasan, tanpa `<h1>`.
   - JANGAN mengarang data Exres (harga, status sertifikat, promo, jumlah kavling terjual, testimoni). Layanan Exres yang boleh disebut (dari Pak Irpan): terima beres, semua diurus sampai sertifikat SHM terbit atas nama pembeli (survei, dokumen ditunjukkan sebelum bayar, AJB di notaris/PPAT, balik nama di Kantor Pertanahan), dan opsi dibangunkan rumah. Tutup artikel dengan kalimat yang menegaskan hal ini bila relevan.
   - Angka hukum/biaya hanya jika ada di sumber; sebut dasar aturannya. Jangan menjanjikan keuntungan investasi.
4. Pilih 1 foto gratis dari Pexels (pexels.com) yang relevan (utamakan suasana Indonesia/tropis, tanpa wajah close-up dan tanpa merek). Pakai URL `https://images.pexels.com/photos/<ID>/pexels-photo-<ID>.jpeg?auto=compress&cs=tinysrgb&w=1260` dan simpan halaman fotonya di `image_source`.
5. Simpan sebagai `blog/_posts/<YYYY-MM-DD>-<slug>.json` dengan kunci: slug, tag (LEGALITAS / PANDUAN / BANGUN RUMAH / BIAYA / KAWASAN / TIPS), title, description (≤160 karakter), date, body_html, image, image_alt, image_source, image_credit ("Pexels").
6. Jalankan `python3 scripts/build_blog.py`, tandai topik [x] di `_TOPIK.md`.
7. Commit ke `main` dan push.

VPS mengambil perubahan otomatis lewat cron `git pull` (lihat README).

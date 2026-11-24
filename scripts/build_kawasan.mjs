// Bangun halaman kawasan EXRES PROPERTY: kawasan/index.html dan kawasan/<slug>.html
// Jalankan dari root repo: node scripts/build_kawasan.mjs
//
// Isi halaman hanya memakai data yang sudah tayang di beranda (lokasi, luas dari citra
// satelit, jarak dari kantor, foto, proses legal). Harga dan kavling tersedia TIDAK ditulis:
// diarahkan ke WhatsApp, sama seperti beranda. Ubah data di KAWASAN, lalu jalankan ulang.
// Gaya (CSS) dan logo diambil dari scripts/build_blog.py supaya selalu sama dengan blog.

const SITE = 'https://exresproperty.pilarmas.online';
const WA_NO = '6285864376785';

// Sumber: beranda exresproperty.pilarmas.online, dicek 24 Nov 2026.
// Luas = perkiraan dari batas sketsa tim di citra satelit (±10%). Jarak = garis lurus dari kantor.
const KAWASAN = [
  { slug: 'pesona-limusnunggal', no: 2, nama: 'Pesona Limusnunggal', judul: 'Pesona Limusnunggal Sukabumi: Kavling SHM Blok A–H',
    kw: 'kavling dan perumahan di Limusnunggal, Cibeureum', kel: 'Limusnunggal', kec: 'Cibeureum',
    alamat: 'Limusnunggal, Kec. Cibeureum, Kota Sukabumi · dekat Jl. Lingkar Selatan',
    luas: '± 14,2 ha', jarak: '± 1,5 km', lat: -6.944481, lng: 106.940004, img: 'satelit-pesona-limusnunggal.jpg',
    foto: [['lahan-siap-bangun.jpg', 'Lahan kavling siap bangun (dokumentasi lapangan 2019)'],
           ['pengerasan-jalan.jpg', 'Pengerasan jalan masuk kawasan (dokumentasi 2019)'],
           ['pembangunan-saluran.jpg', 'Pembangunan saluran & turap batu (dokumentasi 2019)'],
           ['akses-jalan-aspal.jpg', 'Akses jalan aspal menuju kawasan']],
    pembuka: 'Pesona Limusnunggal adalah kawasan kavling yang sedang kami kembangkan di Kelurahan Limusnunggal, Kecamatan Cibeureum, Kota Sukabumi. Luasnya sekitar 14,2 ha, dibagi menjadi 8 tahap pembangunan, Blok A sampai Blok H, mulai dari gerbang depan di sisi Jl. Lingkar Selatan.',
    extra: `<h2>Pembagian blok</h2>
<p>Luas tiap blok diukur dari citra satelit dan bisa berbeda di lapangan. Kavling yang masih tersedia di tiap blok kami kirimkan lewat WhatsApp, karena daftarnya terus berubah.</p>
<table><tr><th>Blok</th><th>Tahap</th><th>Luas blok (perkiraan)</th></tr>
<tr><td>A</td><td>1 · gerbang depan</td><td>± 1,9 ha</td></tr><tr><td>B</td><td>2</td><td>± 1,6 ha</td></tr>
<tr><td>C</td><td>3</td><td>± 1,5 ha</td></tr><tr><td>D</td><td>4</td><td>± 2,1 ha</td></tr>
<tr><td>E</td><td>5</td><td>± 2,4 ha</td></tr><tr><td>F</td><td>6</td><td>± 0,87 ha</td></tr>
<tr><td>G</td><td>7</td><td>± 1,1 ha</td></tr><tr><td>H</td><td>8 · sisi utara</td><td>± 2,9 ha</td></tr></table>
<p>Siteplan pemasaran 2019 untuk Blok A1–A6 memuat 61 kavling. Siteplan resmi kami tunjukkan saat survei.</p>
<h2>Waktu tempuh dari Pesona Limusnunggal</h2>
<table><tr><th>Tujuan</th><th>Waktu berkendara</th><th>Jarak</th></tr>
<tr><td>Simpang Tol Sukabumi Timur</td><td>± 12 menit</td><td>4,4 km</td></tr>
<tr><td>Stasiun Sukabumi</td><td>± 13 menit</td><td>4,2 km</td></tr>
<tr><td>RSUD R. Syamsudin, SH</td><td>± 13 menit</td><td>4,6 km</td></tr>
<tr><td>Universitas Muhammadiyah Sukabumi</td><td>± 13 menit</td><td>4,4 km</td></tr></table>
<p class="meta">Menurut Google Maps, dicek 24 November 2026; bisa berubah sesuai lalu lintas.</p>` },
  { slug: 'jembatan-merah-indah', no: 1, nama: 'Jembatan Merah Indah', judul: 'Jembatan Merah Indah Sukabumi: Kawasan Awal EXRES',
    kw: 'perumahan dan kavling di kawasan Jembatan Merah, Limusnunggal', kel: 'Limusnunggal', kec: 'Cibeureum',
    alamat: 'Kp. Baru Kapling, Limusnunggal, Kec. Cibeureum, Kota Sukabumi',
    luas: '± 12,0 ha', jarak: 'lokasi kantor', lat: -6.9570265, lng: 106.9335835, img: 'satelit-jembatan-merah.jpg',
    foto: [['gerbang-jembatan-merah-indah.jpg', 'Gapura kawasan Jembatan Merah Indah · 2026'],
           ['jm-pembangunan-rumah.jpg', 'Pembangunan rumah di kawasan Jembatan Merah (arsip)'],
           ['jm-saung-jalan.jpg', 'Saung & jalan kavling di kawasan Jembatan Merah (arsip)']],
    pembuka: 'Jembatan Merah Indah adalah kawasan pertama PT Exres Jati Manggung, di Kelurahan Limusnunggal, Kecamatan Cibeureum, Kota Sukabumi. Kantor kami ada di sini, di Kp. Baru Kapling, dekat Djembatan Merah yang jadi patokan warga Sukabumi. Dari kawasan seluas sekitar 12 ha ini kami mengembangkan kavling dan rumah di sekitarnya.',
    extra: '' },
  { slug: 'proklamasi-residence', no: 3, nama: 'Proklamasi Residence', judul: 'Proklamasi Residence, Jayaraksa, Kota Sukabumi',
    kw: 'perumahan di Jl. Proklamasi, Jayaraksa', kel: 'Jayaraksa', kec: 'Baros',
    alamat: 'Utara Jl. Proklamasi, Jayaraksa, Kota Sukabumi',
    luas: '± 9.400 m²', jarak: '± 1,1 km', lat: -6.9650227, lng: 106.9285379, img: 'satelit-proklamasi.jpg', foto: [],
    pembuka: 'Proklamasi Residence berada di sisi utara Jl. Proklamasi, Kelurahan Jayaraksa, Kota Sukabumi, sekitar 1,1 km dari kantor kami. Luas kawasannya sekitar 9.400 m².', extra: '' },
  { slug: 'garuda-baros', no: 4, nama: 'Perumahan Garuda 1 & 2', judul: 'Perumahan Garuda 1 & 2 Baros, Kota Sukabumi',
    kw: 'perumahan dan kavling Garuda di Baros', kel: 'Baros', kec: 'Baros',
    alamat: 'Garuda 1: antara Jl. Genteng & Jl. Safir 1, Baros · Garuda 2: sepanjang Jl. Kav. Garuda II, Baros',
    luas: '± 3,2 ha (Garuda 1) + ± 4,8 ha (Garuda 2)', jarak: '± 0,7 km (Garuda 1) · ± 1,1 km (Garuda 2)',
    lat: -6.96215, lng: 106.940042, lat2: -6.9599693, lng2: 106.944655, img: 'satelit-garuda-1.jpg', img2: 'satelit-garuda-2.jpg', foto: [],
    pembuka: 'Perumahan Garuda 1 dan Garuda 2 adalah dua kawasan yang sudah kami kembangkan di Kelurahan Baros, Kota Sukabumi. Garuda 1 seluas sekitar 3,2 ha berada di antara Jl. Genteng dan Jl. Safir 1. Garuda 2 seluas sekitar 4,8 ha membentang di sepanjang Jl. Kav. Garuda II.', extra: '' },
  { slug: 'bumi-ciwaringin-damai', no: 6, nama: 'Bumi Ciwaringin Damai', judul: 'Bumi Ciwaringin Damai, Jayaraksa, Kota Sukabumi',
    kw: 'perumahan Bumi Ciwaringin Damai di Jl. Damai, Jayaraksa', kel: 'Jayaraksa', kec: 'Baros',
    alamat: 'Jl. Damai & Jl. Damai I, Jayaraksa · selatan Jl. Lingkar Selatan, Kota Sukabumi',
    luas: '± 3,8 ha', jarak: '± 0,9 km', lat: -6.9514447, lng: 106.9306194, img: 'satelit-bumi-ciwaringin-damai.jpg', foto: [],
    pembuka: 'Bumi Ciwaringin Damai adalah kawasan yang sudah kami kembangkan di Jl. Damai dan Jl. Damai I, Kelurahan Jayaraksa, di selatan Jl. Lingkar Selatan, Kota Sukabumi. Luasnya sekitar 3,8 ha, sekitar 0,9 km dari kantor kami.', extra: '' },
  { slug: 'kavling-lio', no: 7, nama: 'Kavling Lio', judul: 'Kavling Lio, Cikondang, Kota Sukabumi',
    kw: 'kavling di Jl. Begeg, Cikondang', kel: 'Cikondang', kec: 'Citamiang',
    alamat: 'Sisi selatan Jl. Begeg, Cikondang · dekat Jl. Lio Balandongan, Kota Sukabumi',
    luas: '± 1.800 m²', jarak: '± 2,2 km', lat: -6.9463969, lng: 106.92273, img: 'satelit-kavling-lio.jpg', foto: [],
    pembuka: 'Kavling Lio berada di sisi selatan Jl. Begeg, Kelurahan Cikondang, dekat Jl. Lio Balandongan, Kota Sukabumi. Luasnya sekitar 1.800 m².', extra: '' },
  { slug: 'bumi-panyawangan', no: 8, nama: 'Perumahan Bumi Panyawangan', judul: 'Perumahan Bumi Panyawangan, Gedongpanjang, Kota Sukabumi',
    kw: 'perumahan di Jl. RH. Didi Sukardi, Gedongpanjang', kel: 'Gedongpanjang', kec: 'Citamiang',
    alamat: 'Jl. RH. Didi Sukardi, Gedongpanjang, Citamiang, Kota Sukabumi',
    luas: '± 3.400 m²', jarak: '± 1,3 km', lat: -6.9455688, lng: 106.9340396, img: 'satelit-bumi-panyawangan.jpg', foto: [],
    pembuka: 'Perumahan Bumi Panyawangan berada di Jl. RH. Didi Sukardi, Kelurahan Gedongpanjang, Kecamatan Citamiang, Kota Sukabumi. Luasnya sekitar 3.400 m², sekitar 1,3 km dari kantor kami.', extra: '' },
  { slug: 'pasir-gelatik-residence', no: 9, nama: 'Pasir Gelatik Residence', judul: 'Pasir Gelatik Residence, Baros, Kota Sukabumi',
    kw: 'kavling dan perumahan di Jl. Baros, Jubleg', kel: 'Baros', kec: 'Baros',
    alamat: 'Dua bidang di tepi Jl. Baros, Jubleg, Baros, Kota Sukabumi',
    luas: '± 6.200 m² (2 bidang)', jarak: '± 1,5 km', lat: -6.965932, lng: 106.945675, img: 'satelit-pasir-gelatik.jpg', foto: [],
    pembuka: 'Pasir Gelatik Residence terdiri dari dua bidang di tepi Jl. Baros, Jubleg, Kelurahan Baros, Kota Sukabumi. Luas totalnya sekitar 6.200 m².', extra: '' },
  { slug: 'kapling-baros-pentas', no: 10, nama: 'Kapling Baros Pentas', judul: 'Kapling Baros Pentas, Jl. Larasati, Baros, Sukabumi',
    kw: 'kavling di Jl. Larasati, Baros', kel: 'Baros', kec: 'Baros',
    alamat: 'Jl. Larasati, Baros · dekat Bendung Cimandiri, Kota Sukabumi',
    luas: '± 1,0 ha', jarak: '± 1,6 km', lat: -6.9687051, lng: 106.944185, img: 'satelit-baros-pentas.jpg', foto: [],
    pembuka: 'Kapling Baros Pentas berada di Jl. Larasati, Kelurahan Baros, dekat Bendung Cimandiri, Kota Sukabumi. Luasnya sekitar 1 ha, sekitar 1,6 km dari kantor kami.', extra: '' },
];

const EXTRA_CSS = `.fakta{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr));gap:12px;margin:20px 0}
.fakta div{background:#F7F3E8;border-radius:10px;padding:14px 16px}.fakta span{display:block;font-size:12px;font-weight:700;letter-spacing:1px;color:#8E4F1E}.fakta b{font-size:17px;color:#073824}
figure{margin:0 0 22px}figure img{width:100%;height:auto;border-radius:12px;display:block}figcaption{font-size:12px;color:#4A564F;margin-top:6px}
.galeri{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr));gap:14px}.galeri figure{margin:0}.galeri img{height:170px;object-fit:cover}
.lain{display:flex;flex-wrap:wrap;gap:8px;padding:0;list-style:none}.lain a{display:inline-block;padding:8px 14px;border:1px solid #D9B893;border-radius:999px;text-decoration:none;font-size:14px;font-weight:600}`;

const FOOT_NOTE = 'Luas kawasan dari batas sketsa tim di citra satelit © Google 2026 (perkiraan ±10%). Harga dan kavling tersedia disampaikan langsung oleh tim kami.';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
const maps = (lat, lng) => `https://www.google.com/maps?q=${lat},${lng}`;
const wa = t => `https://wa.me/${WA_NO}?text=` + encodeURIComponent(t);
const ORG = { '@type': 'RealEstateAgent', '@id': SITE + '/#perusahaan', name: 'PT Exres Jati Manggung (EXRES PROPERTY)', url: SITE + '/' };
const crumbs = items => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE + '/' + u })) });

// Ambil CSS dan LOGO dari build_blog.py supaya tampilan sama dengan blog.
function fromBlog(py) {
  const css = py.match(/^CSS='''([\s\S]*?)'''/m);
  const logo = py.match(/^LOGO='([^']*)'/m);
  if (!css || !logo) throw new Error('CSS/LOGO tidak ditemukan di build_blog.py');
  return { CSS: css[1], LOGO: logo[1] };
}

function shell({ CSS, LOGO }, title, desc, body, canon, ld, depth = '../') {
  const t = esc(title), d = esc(desc);
  return `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t} · EXRES PROPERTY</title><meta name="description" content="${d}">
<link rel="canonical" href="${SITE}/${canon}"><meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:title" content="${t}"><meta property="og:description" content="${d}"><meta property="og:type" content="website"><meta property="og:url" content="${SITE}/${canon}"><meta property="og:locale" content="id_ID"><meta property="og:site_name" content="EXRES PROPERTY">
<link rel="icon" href="${depth}assets/img/favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#0B5D3B">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>${CSS}
${EXTRA_CSS}</style>
<script type="application/ld+json">${JSON.stringify(ld)}</script></head><body>
<header><div class="wrap top"><a class="brand" href="${depth}">${LOGO}<span><b>EXRES</b><small>PROPERTY</small></span></a>
<nav><a href="${depth}#proyek">Proyek</a><a href="${depth}kawasan/">Kawasan</a><a href="${depth}#legalitas">Legalitas</a><a href="${depth}blog/">Blog</a></nav>
<a class="btn" href="${depth}#survei">Jadwalkan Survei</a></div></header>
${body}
<footer><div class="wrap">© 2026 PT Exres Jati Manggung · Kp. Baru Kapling, Limusnunggal, Kec. Cibeureum, Kota Sukabumi · Telp 0858-6437-6785 · <a href="${depth}">Beranda</a> · <a href="${depth}kawasan/">Kawasan</a> · <a href="${depth}blog/">Blog</a><br><span style="font-size:12px">${FOOT_NOTE}</span></div></footer>
</body></html>
`;
}

function lokasiCell(k) {
  if (k.lat2) return `<a href="${maps(k.lat, k.lng)}" target="_blank" rel="noopener">Garuda 1 di Google Maps →</a><br><a href="${maps(k.lat2, k.lng2)}" target="_blank" rel="noopener">Garuda 2 di Google Maps →</a>`;
  return `<a href="${maps(k.lat, k.lng)}" target="_blank" rel="noopener">Buka di Google Maps →</a>`;
}

function buildPage(st, k) {
  const luasPendek = k.luas.replace(/± /g, '±');
  let desc = `${k.nama}: ${k.kw}, Kota Sukabumi. Luas kawasan ${luasPendek}. Lihat peta, foto, dan jadwalkan survei bersama PT Exres Jati Manggung.`;
  if (desc.length > 160) desc = `${k.nama}, ${k.kel}, Kota Sukabumi. Luas ${luasPendek}. Peta, foto, dan survei bersama PT Exres Jati Manggung.`;
  let imgs = `<figure><img src="../assets/img/${k.img}" alt="Citra satelit batas kawasan ${esc(k.nama)}" loading="lazy"><figcaption>Batas kawasan ${esc(k.img2 ? 'Garuda 1' : k.nama)} dari sketsa tim · citra satelit © Google 2026</figcaption></figure>`;
  if (k.img2) imgs += `<figure><img src="../assets/img/${k.img2}" alt="Citra satelit batas kawasan Garuda 2" loading="lazy"><figcaption>Batas kawasan Garuda 2 dari sketsa tim · citra satelit © Google 2026</figcaption></figure>`;
  const galeri = k.foto.length ? '<h2>Foto kawasan</h2><div class="galeri">' + k.foto.map(([f, c]) => `<figure><img src="../assets/img/${f}" alt="${esc(c)}" loading="lazy"><figcaption>${esc(c)}</figcaption></figure>`).join('') + '</div>' : '';
  const lain = '<ul class="lain">' + KAWASAN.filter(o => o.slug !== k.slug).map(o => `<li><a href="${o.slug}.html">${esc(o.nama)}</a></li>`).join('') + '</ul>';
  const waLink = wa(`Halo Exres Property, saya lihat halaman ${k.nama} di website. Boleh info kavling yang tersedia dan jadwal survei?`);
  const body = `<div class="hero"><div class="wrap"><span class="tag">KAWASAN EXRES · ${esc(k.kel.toUpperCase())}, KOTA SUKABUMI</span><h1>${esc(k.judul)}</h1><p>${esc(k.alamat)}</p></div></div>
<div class="wrap"><article><p class="meta"><a href="./">← Semua kawasan</a> · <a href="../">Beranda</a></p>
<p>${esc(k.pembuka)}</p>
<div class="fakta"><div><span>LUAS KAWASAN</span><b>${esc(k.luas)}</b></div><div><span>DARI KANTOR EXRES</span><b>${esc(k.jarak)}</b></div><div><span>KELURAHAN · KECAMATAN</span><b>${esc(k.kel)} · ${esc(k.kec)}</b></div><div><span>LOKASI</span><b>${lokasiCell(k)}</b></div></div>
${imgs}
${k.extra}
<h2>Kavling tersedia dan harga</h2>
<p>Daftar kavling yang masih tersedia di ${esc(k.nama)} dan harganya kami kirimkan langsung lewat WhatsApp, karena terus berubah. Saat survei, Anda melihat sendiri lokasi, sertifikat, dan siteplannya sebelum memutuskan.</p>
<h2>Legalitas sampai SHM atas nama Anda</h2>
<p>Sebelum membayar, Anda melihat sendiri sertifikat dan siteplannya. Setelah itu seluruh proses legal kami kerjakan: akta jual beli di notaris/PPAT, balik nama di Kantor Pertanahan, sampai sertifikat SHM atas nama Anda kami serahkan. Nomor sertifikat bisa Anda cocokkan sendiri lewat aplikasi Sentuh Tanahku milik Kementerian ATR/BPN.</p>
<p>Baca juga: <a href="../blog/cek-legalitas-kavling/">cara cek legalitas kavling sebelum membayar</a> dan <a href="../blog/shm-vs-hgb/">beda SHM dan HGB</a>.</p>
${galeri}
<div class="cta"><p>Ingin melihat ${esc(k.nama)} langsung? Kami temani survei ke lokasi dan tunjukkan dokumennya.</p><div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn cu" href="../#survei">Jadwalkan survei</a><a class="btn" style="border:2px solid #fff" href="${waLink}" target="_blank" rel="noopener">Tanya via WhatsApp</a></div></div>
<h2>Kawasan EXRES lainnya di Kota Sukabumi</h2>
${lain}
</article></div>`;
  const place = { '@type': 'Place', name: k.nama + ', Kota Sukabumi', url: `${SITE}/kawasan/${k.slug}.html`,
    address: { '@type': 'PostalAddress', streetAddress: k.alamat.split(' · ')[0], addressLocality: 'Kota Sukabumi', addressRegion: 'Jawa Barat', addressCountry: 'ID' },
    geo: { '@type': 'GeoCoordinates', latitude: k.lat, longitude: k.lng }, hasMap: maps(k.lat, k.lng), image: `${SITE}/assets/img/${k.img}` };
  const ld = { '@context': 'https://schema.org', '@graph': [place, ORG, crumbs([['Beranda', ''], ['Kawasan', 'kawasan/'], [k.nama, `kawasan/${k.slug}.html`]])] };
  return shell(st, k.judul, desc, body, `kawasan/${k.slug}.html`, ld);
}

function buildIndex(st) {
  const urut = [...KAWASAN].sort((a, b) => a.no - b.no);
  const cards = urut.map(k => `<a class="card" href="${k.slug}.html"><img src="../assets/img/${k.img}" alt="Citra satelit ${esc(k.nama)}" loading="lazy" style="width:calc(100% + 52px);margin:-26px -26px 6px;height:180px;object-fit:cover;border-radius:10px 10px 0 0;display:block"><span class="k">${esc(k.kel.toUpperCase())} · ${esc(k.kec.toUpperCase())}</span><h2>${esc(k.nama)}</h2><p>${esc(k.alamat)}<br>Luas kawasan ${esc(k.luas)}</p><span class="more">Lihat kawasan →</span></a>`).join('');
  const body = `<div class="hero"><div class="wrap"><span class="tag">KAWASAN EXRES · KOTA SUKABUMI</span><h1>Kavling dan perumahan kami di Kota Sukabumi.</h1><p>10 kawasan dengan total luas sekitar 41 ha di Cibeureum, Baros, Jayaraksa, Cikondang, dan Gedongpanjang. Semuanya bisa Anda kunjungi bersama tim kami.</p></div></div>
<div class="wrap"><div class="grid">${cards}</div><p class="meta" style="margin-top:-24px">Garuda 1 dan Garuda 2 ditampilkan dalam satu halaman. ${FOOT_NOTE}</p></div>`;
  const items = urut.map((k, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/kawasan/${k.slug}.html`, name: k.nama }));
  const ld = { '@context': 'https://schema.org', '@graph': [{ '@type': 'ItemList', name: 'Kawasan EXRES PROPERTY di Kota Sukabumi', itemListElement: items }, ORG, crumbs([['Beranda', ''], ['Kawasan', 'kawasan/']])] };
  return shell(st, 'Kavling & Perumahan EXRES di Kota Sukabumi: 10 Kawasan',
    'Daftar kawasan kavling dan perumahan PT Exres Jati Manggung di Kota Sukabumi: Pesona Limusnunggal, Jembatan Merah Indah, Garuda Baros, dan lainnya.',
    body, 'kawasan/', ld);
}

// Kembalikan { 'kawasan/<file>': html } dari isi build_blog.py.
function buildKawasan(blogPy) {
  const st = fromBlog(blogPy);
  const out = {};
  for (const k of KAWASAN) out[`kawasan/${k.slug}.html`] = buildPage(st, k);
  out['kawasan/index.html'] = buildIndex(st);
  return out;
}
globalThis.buildKawasan = buildKawasan;

if (typeof process !== 'undefined' && process.versions && process.versions.node) {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const url = await import('node:url');
  const root = path.dirname(path.dirname(url.fileURLToPath(import.meta.url)));
  const files = buildKawasan(fs.readFileSync(path.join(root, 'scripts', 'build_blog.py'), 'utf8'));
  fs.mkdirSync(path.join(root, 'kawasan'), { recursive: true });
  for (const [p, html] of Object.entries(files)) fs.writeFileSync(path.join(root, p), html);
  console.log(`${Object.keys(files).length} halaman kawasan dibangun`);
}

# EXRES PROPERTY — Website

Landing page PT Exres Jati Manggung (Kota Sukabumi).

Repo ini dipakai untuk **mengedit isi/data** website. Website tayang di **VPS** (`exresproperty.pilarmas.online`, server 202.134.242.165), bukan di GitHub Pages. Setelah perubahan selesai, file di repo ini dipasang ke VPS.

## Isi
- `index.html` — halaman utama (HTML + CSS + JS, tanpa build).
- `assets/img/` — foto proyek dan citra satelit (© Google untuk citra satelit).

## Pasang ke VPS (Nginx)
```bash
# di VPS
sudo git clone https://github.com/vansmzim-commits/WebExresProperty.git /var/www/exresproperty
# update berikutnya:
cd /var/www/exresproperty && sudo git pull
```
Contoh server block Nginx:
```nginx
server {
    listen 80;
    server_name exresproperty.pilarmas.online;
    root /var/www/exresproperty;
    index index.html;
    location / { try_files $uri $uri/ =404; }
    location ~ /\.git { deny all; }
}
```
Lalu `sudo nginx -t && sudo systemctl reload nginx` dan pasang HTTPS:
`sudo certbot --nginx -d exresproperty.pilarmas.online`.

## Data yang masih perlu dikonfirmasi
- Nomor WhatsApp (sementara memakai 0858-6437-6785).
- Harga per m², status sertifikat, nama notaris/PPAT, skema tanda jadi & cicilan.
- Luas kawasan dihitung dari citra satelit (perkiraan ±10%).

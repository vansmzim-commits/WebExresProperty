#!/usr/bin/env python3
"""Bangun halaman blog dari blog/_posts/*.json.
Jalankan dari root repo:  python3 scripts/build_blog.py
Setiap post JSON: slug, tag, title, description, date (YYYY-MM-DD), body_html.
Menghasilkan: blog/index.html, blog/<slug>/index.html, sitemap.xml (ikut memuat halaman kawasan/*.html).
"""
import json, glob, os, html
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE='https://exresproperty.pilarmas.online'
WA='https://wa.me/6285864376785?text=Halo%20Exres%20Property%2C%20saya%20baca%20artikel%20di%20website%20dan%20ingin%20bertanya%20soal%20kavling.'
BULAN=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
def tgl(d):
    y,m,dd=d.split('-'); return f'{int(dd)} {BULAN[int(m)-1]} {y}'
LOGO='<svg width="96" height="40" viewBox="0 0 480 200" aria-hidden="true"><path d="M15 187 L243 17 L292 60 L105 187 Z" fill="#0B5D3B"></path><path d="M240 17 L262 17 L470 188 L420 188 Z" fill="#B56A2D"></path><rect x="212" y="66" width="26" height="26" fill="#B56A2D"></rect><rect x="244" y="66" width="26" height="26" fill="#B56A2D"></rect><rect x="212" y="98" width="26" height="26" fill="#B56A2D"></rect><rect x="244" y="98" width="26" height="26" fill="#B56A2D"></rect></svg>'
CSS='''*{box-sizing:border-box}body{margin:0;font-family:'Montserrat',system-ui,sans-serif;color:#1F2A24;background:#F7F3E8}
a{color:#8E4F1E}a:hover{color:#6E3C15}
header{background:#fff;border-bottom:3px solid #B56A2D}.wrap{max-width:1100px;margin:0 auto;padding:0 24px}
.top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;padding-top:14px;padding-bottom:14px}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:#0B5D3B}.brand b{font-size:22px;letter-spacing:1px;display:block;line-height:1}.brand small{font-size:10px;letter-spacing:4px;font-weight:700}
nav a{color:#0B5D3B;text-decoration:none;font-weight:600;font-size:14px;margin-left:20px}
.btn{display:inline-flex;align-items:center;min-height:46px;padding:10px 20px;border-radius:8px;background:#0B5D3B;color:#fff!important;text-decoration:none;font-weight:700}
.btn.cu{background:#B56A2D}
.hero{background:#0B5D3B;color:#fff;padding:56px 0 48px}.hero .tag{color:#D9B893;font-size:13px;font-weight:700;letter-spacing:3px}
.hero h1{margin:12px 0 10px;font-size:40px;line-height:1.15;font-weight:800}.hero p{margin:0;color:#E3EEE7;font-size:17px;line-height:1.6;max-width:720px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(320px,100%),1fr));gap:22px;padding:48px 0}
.card{background:#fff;border-radius:14px;padding:26px;border-top:4px solid #B56A2D;text-decoration:none;color:#1F2A24;display:flex;flex-direction:column;gap:10px}
.card .k{font-size:12px;font-weight:700;letter-spacing:1px;color:#8E4F1E}.card h2{margin:0;font-size:20px;line-height:1.35;color:#073824}.card p{margin:0;font-size:14px;line-height:1.7;color:#3A463F}.card .more{margin-top:auto;font-weight:700;color:#8E4F1E}
article{background:#fff;border-radius:16px;padding:40px clamp(20px,5vw,56px);margin:40px auto;max-width:820px;line-height:1.8;font-size:17px}
article h2{color:#073824;font-size:24px;margin:34px 0 8px;line-height:1.3}article h3{color:#0B5D3B;font-size:19px;margin:24px 0 6px}
article ul,article ol{padding-left:22px}article li{margin:6px 0}
.note{background:#F7F3E8;border:1px solid #D9B893;border-radius:12px;padding:16px 20px;font-size:15px;line-height:1.7}
table{border-collapse:collapse;width:100%;font-size:15px;margin:12px 0}th,td{border-bottom:1px solid #E6E6E6;padding:10px 8px;text-align:left;vertical-align:top}th{color:#073824}
.cta{background:#0B5D3B;color:#fff;border-radius:14px;padding:26px;margin-top:36px;display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between}.cta p{margin:0;font-size:16px;color:#E3EEE7;max-width:480px}
.meta{font-size:13px;color:#4A564F}
footer{background:#073824;color:#D3E3D9;padding:32px 0;font-size:14px;margin-top:40px}footer a{color:#D9B893}
@media(max-width:600px){.hero h1{font-size:30px}nav a{margin:0 14px 0 0}}'''
def page(title,desc,body,canon,depth='../'):
    return f'''<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)} · EXRES PROPERTY</title><meta name="description" content="{html.escape(desc)}">
<link rel="canonical" href="https://exresproperty.pilarmas.online/{canon}"><meta property="og:title" content="{html.escape(title)}"><meta property="og:description" content="{html.escape(desc)}"><meta property="og:type" content="article">
<link rel="icon" href="{depth}assets/img/favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#0B5D3B">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>{CSS}</style></head><body>
<header><div class="wrap top"><a class="brand" href="{depth}">{LOGO}<span><b>EXRES</b><small>PROPERTY</small></span></a>
<nav><a href="{depth}#proyek">Proyek</a><a href="{depth}kawasan/">Kawasan</a><a href="{depth}#legalitas">Legalitas</a><a href="{depth}blog/">Blog</a><a href="{depth}#faq">FAQ</a></nav>
<a class="btn" href="{depth}#survei">Jadwalkan Survei</a></div></header>
{body}
<footer><div class="wrap">© 2026 PT Exres Jati Manggung · Jl. Baros, Kp. Baru, Kel. Baros, Kec. Baros, Kota Sukabumi · Telp 0858-6437-6785 · <a href="{depth}">Beranda</a> · <a href="{depth}blog/">Blog</a><br><span style="font-size:12px">Artikel ini informasi umum, bukan nasihat hukum. Untuk kasus tertentu, konsultasikan dengan notaris/PPAT atau Kantor Pertanahan.</span></div></footer>
</body></html>'''
def cta():
    return f'<div class="cta"><p>Ingin melihat langsung dokumen dan kavlingnya? Kami temani survei ke lokasi di Kota Sukabumi.</p><div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn cu" href="../../#survei">Jadwalkan survei</a><a class="btn" style="border:2px solid #fff" href="{WA}" target="_blank" rel="noopener">Tanya via WhatsApp</a></div></div>'

def fig(p):
    if not p.get('image'): return ''
    return f'<figure style="margin:0 0 24px"><img src="{html.escape(p["image"])}" alt="{html.escape(p.get("image_alt",""))}" loading="lazy" style="width:100%;height:auto;max-height:420px;object-fit:cover;border-radius:12px;display:block"><figcaption style="font-size:12px;color:#4A564F;margin-top:6px">Foto: <a href="{html.escape(p.get("image_source","#"))}" target="_blank" rel="noopener">{html.escape(p.get("image_credit","Pexels"))}</a> (gratis untuk dipakai)</figcaption></figure>'
def thumb(p):
    if not p.get('image'): return ''
    return f'<img src="{html.escape(p["image"])}" alt="{html.escape(p.get("image_alt",""))}" loading="lazy" style="width:calc(100% + 52px);margin:-26px -26px 6px;height:180px;object-fit:cover;border-radius:10px 10px 0 0;display:block">'
def main():
    posts=[json.load(open(f)) for f in glob.glob(os.path.join(ROOT,'blog','_posts','*.json'))]
    posts.sort(key=lambda p:(p['date'],p['slug']),reverse=True)
    cards=''
    for p in posts:
        d=os.path.join(ROOT,'blog',p['slug']); os.makedirs(d,exist_ok=True)
        art=f'<div class="hero"><div class="wrap"><span class="tag">{html.escape(p["tag"])}</span><h1>{html.escape(p["title"])}</h1><p>{html.escape(p["description"])}</p></div></div><div class="wrap"><article><p class="meta"><a href="../">← Semua artikel</a> · Tim EXRES PROPERTY · {tgl(p["date"])}</p>{fig(p)}{p["body_html"]}{cta()}</article></div>'
        open(os.path.join(d,'index.html'),'w').write(page(p['title'],p['description'],art,f'blog/{p["slug"]}/','../../'))
        cards+=f'<a class="card" href="{p["slug"]}/">{thumb(p)}<span class="k">{html.escape(p["tag"])} · {tgl(p["date"])}</span><h2>{html.escape(p["title"])}</h2><p>{html.escape(p["description"])}</p><span class="more">Baca artikel →</span></a>'
    idx=f'<div class="hero"><div class="wrap"><span class="tag">BLOG · EDUKASI PEMBELI</span><h1>Beli tanah dengan tenang.</h1><p>Panduan singkat seputar legalitas, jenis sertifikat, membangun rumah, dan kawasan Sukabumi, supaya Anda yakin sebelum memutuskan.</p></div></div><div class="wrap"><div class="grid">{cards}</div></div>'
    open(os.path.join(ROOT,'blog','index.html'),'w').write(page('Blog & edukasi pembeli kavling','Panduan legalitas kavling, sertifikat tanah, membangun rumah, dan info kawasan dari PT Exres Jati Manggung, Kota Sukabumi.',idx,'blog/'))
    last=posts[0]['date'] if posts else '2026-11-24'
    urls=[('',last),('blog/',last)]+[(f'blog/{p["slug"]}/',p['date']) for p in posts]
    kdir=os.path.join(ROOT,'kawasan')
    if os.path.isdir(kdir):
        urls+=[('kawasan/'+('' if f=='index.html' else f),last) for f in sorted(os.listdir(kdir)) if f.endswith('.html') and 'http-equiv="refresh"' not in open(os.path.join(kdir,f)).read()]
    sm='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'  <url><loc>{SITE}/{u}</loc><lastmod>{d}</lastmod></url>\n' for u,d in urls)+'</urlset>\n'
    open(os.path.join(ROOT,'sitemap.xml'),'w').write(sm)
    print(f'{len(posts)} artikel dibangun')
if __name__=='__main__': main()

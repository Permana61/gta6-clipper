# AGENT.md — GTA 6 Clipper (gta6-clipper-01)

Loop kerja untuk entry ini: klip GTA 6 "anjing naik jet ski" sebagai
YouTube Shorts. Yang dinilai adalah videonya; repo ini hanya
menyerahkan `VIDEO.json` berisi URL Shorts-nya.

## 1) Cek prasyarat

- Channel YouTube siap upload (akun permanahaxor223@gmail.com).
- `ffmpeg` terpasang dan bisa jalan.
- Play code siap: `makefun-shrub-dormouse-pecan`.
- Node 22 tersedia untuk menjalankan `main.ts`.

## 2) Cari momen + putuskan kreatif

Tonton kompilasi launch-day *"GTA 6 Funny and Epic Moments Ep1"*
(youtube.com/watch?v=-qHiau3lKV4) dan pilih satu momen tunggal.

Pilihan entry ini: **anjing naik jet ski, segmen 352–363 detik**
(Jason bawa anjing pakai goggles naik jet ski di laut Leonida).

Kenapa momen ini:

- Momen tunggal yang bersih — satu adegan utuh, tanpa butuh konteks.
- Hook instan — anjing bergoggles di jet ski langsung lucu di detik
  pertama.
- Wholesome — manis, bukan kekerasan, aman untuk penonton luas.
- Sudah vertikal — aksinya di tengah frame, jadi crop 9:16 aman.

## 3) Tulis pitch make.fun

Siapkan teks pitch + voiceover TTS untuk kartu akhir klip:

- Teks kartu akhir di layar + CTA singkat ke make.fun.
- Voiceover TTS membacakan pitch yang sama di akhir klip.
- Pitch ditulis sebelum render, supaya durasi kartu + voiceover
  sudah pas dengan klip.

## 4) Potong / render dengan ffmpeg di sesi yang direkam

- Potong segmen 352–363 detik dari video sumber (durasi klip
  ~22 detik).
- Crop strip tengah `608x1080`, lalu scale ke `1080x1920` (vertikal
  9:16) — kira-kira:
  `ffmpeg -i input.mp4 -ss 352 -t 22 -vf "crop=608:1080,scale=1080:1920" clip.mp4`
- Tempel kartu pitch make.fun + voiceover TTS di akhir klip.
- Render dilakukan di sesi yang direkam (bukti proses).

## 5) Serahkan klip + judul + deskripsi untuk upload

- Judul YouTube: "GTA 6 Lets You Take Your DOG on a Jet Ski!".
- Serahkan klip + judul + deskripsi ke parent untuk diunggah via
  browser ke channel YouTube (atau upload sendiri kalau aksesnya ada).
- Upload sebagai YouTube Shorts (vertikal 9:16).

## 6) Isi VIDEO.json dengan URL asli

- Setelah upload selesai, ambil URL Shorts aslinya.
- Isi `VIDEO.json` di root repo dengan URL tersebut — jangan pakai
  URL palsu / placeholder.
- Format: `{"url": "https://www.youtube.com/shorts/<id>"}`

## 7) Check + submit

- Jalankan `main.ts` untuk menyerahkan `VIDEO.json` ke output:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- Pastikan `out/VIDEO.json` berisi URL Shorts asli.
- Check lolos, lalu submit entry.

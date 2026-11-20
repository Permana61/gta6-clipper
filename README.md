# GTA 6 Clipper — Dog on a Jet Ski

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Permana61/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Permana61/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry untuk make.fun **gta6-clipper-01** — "Clip GTA 6 for the most YouTube views".

## Klipnya

**Judul YouTube:** "GTA 6 Lets You Take Your DOG on a Jet Ski!"

Momen yang dipilih: **anjing naik jet ski** — Jason membawa anjingnya
(pakai goggles) naik jet ski di laut Leonida. Momen ini diambil dari
video kompilasi launch-day *"GTA 6 Funny and Epic Moments Ep1"*
(youtube.com/watch?v=-qHiau3lKV4), segmen **352–363 detik**.

Kenapa momen ini:

- **Momen tunggal yang bersih** — satu adegan utuh, gampang dipahami
  tanpa konteks cerita GTA 6.
- **Hook instan** — anjing pakai goggles di atas jet ski langsung
  kelihatan aneh dan lucu dalam 1 detik pertama.
- **Wholesome** — momen manis, bukan kekerasan; cocok untuk penonton
  luas dan aman dibagikan.
- **Sudah vertikal-friendly** — aksinya terpusat di tengah frame, jadi
  potongan 9:16 tidak membuang subjeknya.

Play code: `makefun-shrub-dormouse-pecan`

## Cara klip dibuat

1. Segmen 352–363 detik (~22 detik) dipotong dari video sumber.
2. Dipotong vertikal 9:16 dengan ffmpeg: crop strip tengah
   `608:1080`, lalu scale ke `1080:1920`.
3. Di akhir klip ditambah **kartu pitch make.fun** (teks di layar)
   dan **voiceover TTS** yang mengajak penonton cek make.fun.
4. Hasilnya diunggah ke YouTube sebagai Shorts.

## Menjalankan main.ts

Program ini hanya menyerahkan `VIDEO.json` ke direktori output
make.fun — video YouTube-nya sendiri yang dinilai.

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` di repo ini berisi URL Shorts asli videonya
(https://www.youtube.com/shorts/XmbTk0DDfmA).

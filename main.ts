// GTA 6 Clipper — Dog on a Jet Ski (gta6-clipper-01)
//
// Entry ini dinilai dari VIDEO YouTube-nya, bukan dari program ini.
// Program ini hanya bertugas menyerahkan VIDEO.json (URL Shorts hasil
// upload) ke direktori output make.fun, supaya sistem bisa memverifikasi
// klipnya. Klipnya sendiri dibuat di luar program ini: dipotong vertikal
// 9:16 dengan ffmpeg dari kompilasi launch-day GTA 6, lalu diunggah ke
// YouTube sebagai Shorts dengan judul "GTA 6 Lets You Take Your DOG
// on a Jet Ski!".

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

function fail(message: string): never {
  console.error(`[gta6-clipper] ERROR: ${message}`);
  process.exit(1);
}

function main(): void {
  const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? "/bot");
  const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

  const source = join(botDir, "VIDEO.json");
  if (!existsSync(source)) {
    fail(`VIDEO.json tidak ditemukan di ${source}. Isi dulu dengan URL Shorts asli setelah upload.`);
  }

  // Validasi isi sebelum menyerahkan: harus JSON dengan url YouTube yang
  // asli, bukan placeholder. Ini mencegah submit dengan VIDEO.json yang
  // belum diisi URL Shorts hasil upload.
  let videoUrl: unknown;
  try {
    videoUrl = (JSON.parse(readFileSync(source, "utf8")) as { url?: unknown }).url;
  } catch (error) {
    fail(`VIDEO.json bukan JSON yang valid: ${(error as Error).message}`);
  }
  if (typeof videoUrl !== "string" || /[<>]/.test(videoUrl) || !/^https:\/\/(www\.)?(youtube\.com\/(shorts\/[A-Za-z0-9_-]{1,}|watch\?v=[A-Za-z0-9_-]{1,})|youtu\.be\/[A-Za-z0-9_-]{1,})/.test(videoUrl)) {
    fail(`VIDEO.json belum berisi URL YouTube yang valid (ditemukan: ${String(videoUrl)}). Isi dulu dengan URL Shorts asli setelah upload.`);
  }

  try {
    mkdirSync(outputDir, { recursive: true });
  } catch (error) {
    fail(`tidak bisa membuat direktori output ${outputDir}: ${(error as Error).message}`);
  }

  const destination = join(outputDir, "VIDEO.json");
  try {
    copyFileSync(source, destination);
  } catch (error) {
    fail(`gagal menyalin ${source} ke ${destination}: ${(error as Error).message}`);
  }

  console.log(`[gta6-clipper] VIDEO.json diserahkan ke ${destination}`);
  console.log(`[gta6-clipper] video: ${videoUrl}`);
}

main();

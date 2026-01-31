# Next.js Simple Blog - Latihan Prisma & Docker

Project ini adalah aplikasi web blog sederhana yang dibangun menggunakan **Next.js 14** untuk tujuan pembelajaran. Fokus utama project ini adalah mengimplementasikan sistem database lokal menggunakan **Prisma ORM** yang terhubung ke **PostgreSQL** di dalam container **Docker**.

## 🚀 Fitur Utama
- **Blog Sederhana**: Menampilkan konten blog dengan dukungan Markdown.
- **Sistem Komentar**: User dapat memberikan feedback pada postingan blog.
- **GitHub Authentication**: Login aman menggunakan akun GitHub melalui Better Auth.
- **Database Lokal**: Manajemen data menggunakan PostgreSQL yang dijalankan via Docker Desktop.

## 🛠️ Stack Teknologi
- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL (via Docker)
- **ORM**: Prisma
- **Auth**: Better Auth
- **UI Components**: shadcn/ui & Tailwind CSS
- **Content**: React Markdown

---

## 📋 Langkah Persiapan (Getting Started)

### 1. Jalankan Database (Docker)
Pastikan Docker Desktop kamu sudah aktif, lalu jalankan container PostgreSQL:
```bash
docker run --name postgres-nextjs -e POSTGRES_PASSWORD=randompassword -e POSTGRES_DB=nextjs_simple_blog_db -p 5432:5432 -d postgres

2. Konfigurasi Environment

Pastikan file .env kamu sudah terisi dengan benar (DATABASE_URL, BETTER_AUTH_SECRET, dsb).
3. Sinkronisasi Database

Jalankan perintah berikut untuk menyiapkan tabel:
Bash

npx prisma generate
npx prisma db push

4. Jalankan Server Development
Bash

npm run dev

Buka http://localhost:3000 untuk melihat hasilnya.
📦 Log Instalasi Project

Berikut adalah daftar package dan library yang diinstal dalam project ini untuk referensi pengembangan:
UI Components (shadcn/ui)
Bash

npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add avatar
npx shadcn@latest add textarea

Database & ORM (Prisma)
Bash

npm install -D prisma
npm install @prisma/client
npx prisma init
npm install @prisma/adapter-pg

Authentication (Better Auth)
Bash

npm install better-auth
npx @better-auth/cli generate

Konten & Utilities
Bash

npm i react-markdown remark-gfm
npm install -D tsx

💡 Perintah Penting (Cheat Sheet)
Perintah	Fungsi
npx prisma generate	Jalankan setiap ada perubahan pada schema.prisma.
npx prisma db push	Menyinkronkan skema Prisma ke database PostgreSQL (Docker harus aktif).
npx prisma studio	Membuka antarmuka GUI di browser untuk melihat isi tabel.
npx prisma db seed	Mengisi database dengan data awal (membutuhkan tsx).

📝 Catatan Pengembangan
Prisma Studio: Dapat diakses melalui http://localhost:51212 saat dijalankan.
Markdown: Menggunakan react-markdown agar tampilan konten blog mengikuti format markdown yang profesional.
```
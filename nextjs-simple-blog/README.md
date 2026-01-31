This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

start docker postgresql

npx prisma studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# apa saja yangf di install di latihan project ini

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add avatar
npx shadcn@latest add textarea

npm install -D prisma
npm install @prisma/client
npx prisma init

npm install better-auth
npx prisma generate
npm install @prisma/adapter-pg
npx @better-auth/cli generate

npx prisma generate
npx prisma db push                  -> harus aktifkan docker pgAdmin
npx prisma studio                   -> localhost:51212 untuk melihat table yang dibuat

npx prisma db seed                  -> saat jalankan ini error
npm install -D tsx                  -> jalankan ini

npm i react-markdown remark-gfm     -> website browser mengikuti markdown

```

- npx prisma db seed    = digunakan saat ingin update isi table database
- npx prisma generate   = kalau ada mengubah di schema.prisma
- npx prisma db push    = lakukan setelah generate

# Портфолио

Одностраничный сайт на Next.js (App Router), TypeScript и Tailwind CSS.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Контакты и ссылки на проекты задаются в `lib/site.ts`.

## Сборка и деплой

```bash
npm run build
```

Деплой: подключите репозиторий к [Vercel](https://vercel.com/new). Пресет задан в `vercel.json` (`framework: nextjs`). Не включайте статический экспорт (`output: "export"`) и не указывайте Output Directory (`out` / `public`).

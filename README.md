# HeatGenius Next.js landing

Готовый лендинг для Railway на Next.js (App Router).

## Что внутри

- современный продающий лендинг под ремонт и обслуживание котлов
- sticky header
- CTA на звонок и WhatsApp
- секции: hero, услуги, преимущества, кейсы, отзывы, FAQ, финальный CTA
- health endpoint: `/api/health`
- `output: 'standalone'` для деплоя на Railway

## Локальный запуск

```bash
pnpm install
pnpm dev
```

Открыть: `http://localhost:3000`

## Продакшн локально

```bash
pnpm install
pnpm build
pnpm start
```

## Деплой на Railway

1. Залей проект в GitHub.
2. В Railway создай новый проект.
3. Выбери **Deploy from GitHub Repo**.
4. Укажи этот репозиторий.
5. Railway сам установит зависимости и выполнит `pnpm build` / `pnpm start`.
6. При желании добавь healthcheck на `/api/health`.

## Что можно быстро доработать дальше

- подключить реальные фото работ
- добавить форму с отправкой в Telegram / email / CRM
- вынести контент в CMS или JSON
- добавить отдельные страницы услуг и SEO-страницы по брендам котлов

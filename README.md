# Humanteq landing page

Адаптивный одностраничный лендинг на React, TypeScript и Vite. Интерфейс включает навигацию по секциям, мобильное меню, интерактивный FAQ и адаптивную вёрстку.

## Требования

- Node.js 20 или новее
- pnpm 9 или новее (рекомендуется)

## Запуск

```bash
pnpm install
pnpm dev
```

После запуска откройте адрес, который выведет Vite (обычно `http://localhost:5173`).

## Production-сборка

```bash
pnpm build
pnpm preview
```

## Структура

```text
src/
  components/    UI-компоненты страницы
  data/          Тексты, навигация и данные блоков
  App.tsx        Компоновка лендинга
  main.tsx       Точка входа React
  styles.css     Адаптивные стили и дизайн-токены
public/          Статические файлы
```

## Основные команды

- `pnpm dev` — локальная разработка
- `pnpm build` — проверка TypeScript и production-сборка
- `pnpm preview` — предпросмотр production-сборки

## Примечание

В проекте используются только самостоятельно созданные интерфейсные элементы и стили. Внешние зависимости зафиксированы в `pnpm-lock.yaml`; папка `node_modules` намеренно не включается в пакет передачи.
# humanteq
# humanteq
# humanteq

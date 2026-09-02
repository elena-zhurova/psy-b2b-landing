# Humanteq landing page ;;;

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
docs/
  design-system-spec.md  Спецификация дизайн-системы
  figma-to-code.md       Правила переноса макетов Figma в код
src/
  design-system/
    tokens/      Foundation, semantic и local design tokens
  stories/       Документация и визуализация design system в Storybook
  main.tsx       Точка входа React
public/
  fonts/         Локальные шрифты для дизайн-системы
  favicon.svg    Иконка проекта
.storybook/      Конфигурация Storybook
```

## Основные команды

- `pnpm dev` — локальная разработка
- `pnpm build` — проверка TypeScript и production-сборка
- `pnpm preview` — предпросмотр production-сборки

## Примечание

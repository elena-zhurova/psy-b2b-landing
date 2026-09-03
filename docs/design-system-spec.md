# Design System Specification


Ты участвуешь в разработке дизайн-системы проекта на React + Vite + TypeScript + Storybook.

Это не разовая задача, а начало постепенного построения дизайн-системы. Все изменения должны быть масштабируемыми, последовательными и соответствовать существующей архитектуре проекта.

## Контекст

Дизайн-система уже частично спроектирована в Figma.

В Figma уже существуют:

- Foundation
- Semantic
- Components

Структура Foundation и Semantic приведена в папке `src/design-system/tokens` и являются источником правды.


На этапе сборки дизайн-системы используй только исходные токены из проекта.

Не придумывай собственную архитектуру, если существующая уже решает задачу.

Если обнаружишь архитектурную проблему или неоднозначность — сначала предложи решение и дождись подтверждения.

---

# Главная задача

Начни реализацию дизайн-системы в коде.

Не пытайся реализовать всё сразу.

Создай основу, которую можно постепенно расширять без рефакторинга.

После каждого этапа результат должен быть рабочим и отображаться в Storybook.

---

# Архитектура

Используй трёхуровневую архитектуру.

Foundation
↓
Semantic
↓
Components

Правила:

- Components никогда не используют Foundation напрямую.
- Components используют только Semantic.
- Semantic является единственным слоем, который знает Foundation.
- Foundation ничего не знает о Semantic и Components.

---

# Этап 1. Foundation

Сначала реализуй Foundation.

Используй существующую структуру из Figma.

Не переименовывай существующие токены без необходимости.

Создай масштабируемую архитектуру для следующих категорий:

- Color
- Typography
- Space
- Radius
- Elevation
- Layout

## Typography note

В `primitives.tokens.json` есть токены `primitives.type.style.regular`, `primitives.type.style.medium` и `primitives.type.style.demibold`. Они приходят из Figma, потому что в макете жирность текста описана через style, а не через числовой weight.

Эти style-токены сохраняются как часть Figma export, но не используются в кодовых text roles. Для `font-weight` используются локальные числовые токены из `local.tokens.json`: `primitives.type.weight.regular`, `primitives.type.weight.medium`, `primitives.type.weight.demibold`.

---

# Layout

Создай систему режимов.

layout/modes

wide
- min-width: 1280px

medium
- 641–1279px

narrow
- 320–640px

Правила:

- Semantic tokens работают через layout/modes.
- Components никогда не используют breakpoints напрямую.
- При изменении breakpoints компоненты не требуют изменений.

---

# Этап 2. Semantic

После Foundation начинай реализацию Semantic.

Первым реализуй токен

semantic/text/heading

Aliases

wide
→ primitives/type/size/48

medium
→ primitives/type/size/40

narrow
→ primitives/type/size/32

Правила:

- Components используют только semantic/text/heading.
- Использование primitives внутри компонентов запрещено.

---

## Surface и Card

### Surface

Surface — крупная композиционная поверхность или контейнер интерфейса.

Surface может содержать другие компоненты, включая Card.

Примеры:
- большие контентные блоки;
- баннеры;
- фреймы форм;
- крупные промо-поверхности;
- контейнеры секций.

Общие токены таких поверхностей используют `semantic/surface/*`
и `semantic/color/surface/*`.

### Card

Card — компактный повторяемый контентный блок, который может использоваться
внутри Surface, Grid или Carousel.

Примеры:
- FAQItem;
- SpecialistCard;
- StatisticCard;
- StoryCard.

Общие свойства карточек используют `semantic/card/*`
и `semantic/color/card/*`.

Если свойство характерно только для одного компонента и не является общим
паттерном Card, оно остаётся компонентно-специфичным:

`semantic/{componentName}/*`

Например:

`semantic/faqItem/gap/active`

---

# Storybook

Storybook является частью дизайн-системы.

После каждого изменения обновляй документацию.

Документация должна отражать:

- структуру Foundation;
- структуру Semantic;
- архитектуру Foundation → Semantic → Components;
- layout/modes;
- semantic/text/heading;
- примеры работы режимов wide / medium / narrow.

При необходимости создавай отдельные Docs Pages для Foundation и Semantic.

---

# Принципы работы

Не выполняй крупные рефакторинги без необходимости.

Если потребуется изменить существующую архитектуру:

1. объясни проблему;
2. предложи минимальное решение;
3. дождись подтверждения.

Предпочитай постепенное развитие системы вместо полной переработки.

---

import { useState } from 'react';

import { Bubble, Button, FAQItem, Link } from './design-system/components';
import { Container, Grid, SideBySide } from './design-system/layout';
import { TemporaryHeader } from './components/TemporaryHeader';
import chartColleagues from './assets/figma-page/chart-colleagues.svg';
import chartManagement from './assets/figma-page/chart-management.svg';
import companyBase from './assets/figma-page/company-base.svg';
import companyOverlay from './assets/figma-page/company-overlay.svg';
import employeeAsset from './assets/figma-page/employee.svg';
import firstLineComponent from './assets/figma-page/firstline-component-2.svg';
import footerDot from './assets/figma-page/footer-dot.svg';
import footerEllipse from './assets/figma-page/footer-ellipse.svg';
import footerGroupLeft from './assets/figma-page/footer-group-left.svg';
import footerGroupLeftNarrow from './assets/figma-page/footer-group-left-narrow.svg';
import footerGroupRight from './assets/figma-page/footer-group-right.svg';
import footerLine from './assets/figma-page/footer-line.svg';
import heroComponent from './assets/figma-page/hero-component-5.svg';
import listMarker from './assets/figma-page/list-marker.svg';
import psyLotti from './assets/figma-page/psy-lotti.svg';
import validationLotti from './assets/figma-page/validation-lotti.svg';
import './App.css';

const stats = [
  {
    href: 'https://nafi.ru/analytics/issledovanie-nafi-tolko-8-rossiyan-pochti-vsegda-chuvstvuyut-sebya-spokoyno/',
    source: 'НАФИ, 2025',
    text: 'россиян часто сталкиваются со стрессом на работе, ещё 34% — время от времени',
    value: '20%',
  },
  {
    href: 'https://hh.ru/article/osnovnyye-ugrozy-dlya-psikhichyeskogo-zdorovya-na-rabotye',
    source: 'hh.ru × «Гедеон Рихтер»',
    text: 'называют угрозой чрезмерную рабочую нагрузку',
    value: '65%',
  },
  {
    href: 'https://www.cnews.ru/news/line/2026-02-27_dve_treti_kompanij_reshili',
    source: 'hh.ru, 2026',
    text: 'компаний ещё не имеют программ поддержки',
    value: '64%',
  },
  {
    href: 'https://news.un.org/ru/story/2022/09/1432581',
    source: 'ВОЗ / МОТ',
    text: 'теряет мировая экономика на тревоге и депрессии ежегодно',
    value: '$1 трлн',
  },
];

const firstLineBubbles = [
  'Перегрузка',
  'Конфликт',
  'Тревога',
  'Сложный разговор',
  'Эмоциональное напряжение',
  'Трудное решение',
];

const companyBubbles = [
  'Начали пользоваться',
  'Вернулись повторно',
  'Оценка полезности',
  'Доля улучшений',
];

const steps = [
  'Выбираем подразделение или группу',
  'Даём доступ, договариваемся о формате',
  'Смотрим использование и результат',
  'Решаем о масштабировании',
];

const faqItems = [
  {
    answer:
      'Универсальные модели не имеют специализированной психологической методологии и отдельного контура безопасности для работы с такими запросами. Humanteq учитывает эмоциональное состояние и контекст обращения и подбирает подходящую технику КПТ или ДБТ, а не отвечает произвольно.',
    question: 'Почему сотрудникам недостаточно обычного ChatGPT?',
  },
  {
    answer:
      'Нет. Это первая линия поддержки, которая при необходимости помогает перейти к профессиональной помощи или доступным ресурсам компании.',
    question: 'Humanteq заменяет живого психолога?',
  },
  {
    answer:
      'Использование и агрегированный результат программы. Личные разговоры закрыты для компании.',
    question: 'Что увидит работодатель?',
  },
  {
    answer:
      'Низкий порог входа — начать можно с одной фразы, без записи. Мировой опыт Wysa и Unmind показывает, что такой формат снижает барьер обращения; собственные данные использования Humanteq публикуем по мере накопления данных корпоративных запусков.',
    question: 'А сотрудники действительно будут пользоваться?',
  },
  {
    answer:
      'Humanteq — дополнение, а не замена. ДМС, штатный психолог и EAP решают глубокие и сложные случаи; Humanteq закрывает раннюю и повседневную поддержку, за которой сотрудники часто не обращаются к специалисту.',
    question: 'Зачем Humanteq, если у нас уже есть психолог или ДМС?',
  },
  {
    answer:
      'Управленческую и психологическую роли важно разделять. Руководитель отвечает за рабочую среду, нагрузку и управление командой, но не должен становиться психологом своих подчинённых.',
    question: 'Почему руководитель сам не может помочь сотруднику?',
  },
  {
    answer:
      'Да — для собственного стресса, подготовки к сложным разговорам и трудных решений под нагрузкой.',
    question: 'Может ли Humanteq быть полезен самим руководителям?',
  },
  {
    answer:
      'Мы измеряем активацию доступа, повторное использование и результат сессий (стало ли легче, понятнее ли следующий шаг) — агрегированно, без доступа к содержанию разговоров.',
    question: 'Как понять, что внедрение дало результат?',
  },
  {
    answer:
      'Для старта — нет. Корпоративный доступ открывается без крупного ИТ-проекта; более глубокие интеграции обсуждаются по факту запроса.',
    question: 'Нужно ли интегрировать Humanteq с нашими системами?',
  },
  {
    answer:
      'У сервиса есть чёткие границы и отдельный контур безопасности: при признаках серьёзного риска Humanteq рекомендует обращение к профессиональной помощи и не пытается заменить её.',
    question: 'Что происходит в сложных или кризисных случаях?',
  },
  {
    answer:
      'Диалоги хранятся в зашифрованном виде и не передаются третьим лицам, за исключением случаев, предусмотренных законодательством РФ. Подробности — в политике конфиденциальности сервиса (ссылка в футере).',
    question: 'Безопасны ли данные?',
  },
  {
    answer:
      'Одна группа или подразделение → несколько недель использования → решение о масштабировании на основе фактических данных.',
    question: 'Как начать?',
  },
  {
    answer:
      "Unmind Nova — трёхмесячное рандомизированное контролируемое исследование (RCT), проведённое самой Unmind под руководством её научного отдела, показало рост уверенности руководителей в управлении своим состоянием и командой на +30,7% относительно контрольной группы (Cohen's d = 0,51, p = 0,031). Wysa — глобальный AI-первый игрок категории: свыше 1 млрд AI-разговоров, присутствие в 105 странах.",
    question: 'Есть ли мировой опыт таких решений?',
  },
  {
    answer:
      'Мы не обещаем напрямую повышать KPI. Humanteq работает с психоэмоциональным фактором, который влияет на способность людей полноценно включаться в работу.',
    question: 'Как Humanteq связан с производительностью и вовлечённостью?',
  },
];

function SectionHeading({
  description,
  title,
}: {
  description?: string;
  title: string;
}) {
  return (
    <div className="page-section-heading">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function MediaSquareSmall({ src }: { src: string }) {
  return (
    <div className="page-media-square">
      <img alt="" src={src} />
    </div>
  );
}

function FooterGraphic() {
  return (
    <div className="page-footer-graphic" aria-hidden="true">
      <img alt="" className="page-footer-graphic__line" src={footerLine} />
      <img alt="" className="page-footer-graphic__ellipse" src={footerEllipse} />
      <picture>
        <source media="(max-width: 640px)" srcSet={footerGroupLeftNarrow} />
        <img alt="" className="page-footer-graphic__left" src={footerGroupLeft} />
      </picture>
      <img alt="" className="page-footer-graphic__right" src={footerGroupRight} />
      <img alt="" className="page-footer-graphic__dot page-footer-graphic__dot--center" src={footerDot} />
      <img alt="" className="page-footer-graphic__dot page-footer-graphic__dot--left" src={footerDot} />
      <img alt="" className="page-footer-graphic__dot page-footer-graphic__dot--right" src={footerDot} />
    </div>
  );
}

export function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="page">
      <TemporaryHeader />

      <section className="page-section page-hero" id="top">
        <Container>
          <SideBySide variant="equal">
            <div className="page-region">
              <SectionHeading
                description="Нельзя убрать неопределённость и стресс из современного бизнеса. Можно повысить способность людей с ними справляться"
                title="Первая линия конфиденциальной психологической поддержки на базе ИИ, доступная 24/7."
              />
              <div className="page-button-row">
                <Button>Обсудить запуск</Button>
                <Link destination="anchor" href="#solution" presentation="filled">Что такое Humanteq</Link>
              </div>
            </div>
            <div className="page-surface page-surface--accent page-hero-card">
              <img alt="" src={heroComponent} />
              <div className="page-hero-lines">
                <p><span>Устойчивость </span><em>людей&nbsp;–</em></p>
                <p><span>Устойчивость </span><em>команды&nbsp;–</em></p>
                <p><span>Устойчивость </span><em>бизнеса.</em></p>
              </div>
            </div>
          </SideBySide>
        </Container>
      </section>

      <section className="page-section" id="task">
        <Container>
          <SectionHeading title="Стресс и нагрузка уже влияют на работоспособность бизнеса" />
          <Grid className="page-stats-grid">
            {stats.map((stat) => (
              <article className="page-stat-card" key={stat.value}>
                <div>
                  <strong>{stat.value}</strong>
                  <p>{stat.text}</p>
                </div>
                {stat.href ? (
                  <Link href={stat.href}>{stat.source}</Link>
                ) : (
                  <p className="page-source">{stat.source}</p>
                )}
              </article>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="page-section page-section--medium" id="gap">
        <Container>
          <div className="page-media-text">
            <MediaSquareSmall src={psyLotti} />
            <div>
              <h2>Психологическое состояние — не только личный вопрос сотрудника.</h2>
              <p>Нагрузка и неопределённость снижают концентрацию, качество решений и способность восстанавливаться — а значит, становятся одним из факторов работоспособности команды.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <SideBySide variant="equal">
            <div className="page-region">
              <SectionHeading
                description="Сотрудник обращается за помощью, когда проблема уже накопилась. А руководитель не должен становиться психологом своего подчинённого."
                title="Компании обычно начинают помогать слишком поздно"
              />
              <ul className="page-marker-list">
                <li><img alt="" src={listMarker} />Высокий порог обращения к психологу</li>
                <li><img alt="" src={listMarker} />Сотруднику сложно обсуждать состояние с начальником</li>
                <li><img alt="" src={listMarker} />Управленческую и психологическую роли важно разделять</li>
              </ul>
            </div>
            <article className="page-surface page-problem-card">
              <h3>Готовность обсуждать психические проблемы</h3>
              <div className="page-chart-row">
                <div>
                  <img alt="" src={chartColleagues} />
                  <strong>70%</strong>
                  <p>с близкими коллегами</p>
                </div>
                <div>
                  <img alt="" src={chartManagement} />
                  <strong>36%</strong>
                  <p>с руководством</p>
                </div>
              </div>
              <p>Даже там, где доверие внутри команды есть, оно почти не доходит до руководителя. Нужен отдельный, ранний и конфиденциальный уровень помощи.</p>
              <Link href="https://hh.ru/vpncheeck?backUrl=%2Farticle%2Fosnovnyye-ugrozy-dlya-psikhichyeskogo-zdorovya-na-rabotye">hh.ru × «Гедеон Рихтер», 2024, n=3 943</Link>
            </article>
          </SideBySide>
        </Container>
      </section>

      <section className="page-section" id="solution">
        <Container>
          <SideBySide variant="equal">
            <div className="page-region">
              <SectionHeading
                description="Сотрудник может обратиться в момент, когда проблема возникает — без записи и ожидания."
                title="Humanteq – первая линия психологической поддержки 24/7"
              />
              <div className="page-bubble-list">
                {firstLineBubbles.map((bubble) => (
                  <Bubble key={bubble} size="md">{bubble}</Bubble>
                ))}
              </div>
            </div>
            <article className="page-surface page-surface--accent page-firstline-card">
              <img alt="" src={firstLineComponent} />
              <h3>Специализированный психологический ИИ, а не универсальный чат.</h3>
              <Link destination="anchor" href="#faq-chatgpt" presentation="filled">Чем мы отличаемся от ChatGPT</Link>
            </article>
          </SideBySide>
        </Container>
      </section>

      <section className="page-section" id="safety">
        <Container>
          <SectionHeading
            description="Сотрудник может обратиться в момент, когда проблема возникает — без записи и ожидания."
            title="Сотруднику – конфиденциальность. Компании – измеримый результат"
          />
          <SideBySide variant="equal">
            <article className="page-surface page-safety-card">
              <div className="page-card-heading">
                <img alt="" src={employeeAsset} />
                <h3>Сотрудник</h3>
              </div>
              <p>Личное пространство, недоступное работодателю. Работодатель и его представители не имеют доступа к содержанию разговоров сотрудников.</p>
            </article>
            <article className="page-surface page-surface--accent page-safety-card">
              <div className="page-card-heading">
                <div className="page-company-asset">
                  <img alt="" src={companyBase} />
                  <img alt="" src={companyOverlay} />
                </div>
                <h3>Компания</h3>
              </div>
              <p>Не наблюдение за сотрудниками, а измерение эффективности программы.</p>
              <div className="page-bubble-list">
                {companyBubbles.map((bubble) => (
                  <Bubble key={bubble} size="md">{bubble}</Bubble>
                ))}
              </div>
            </article>
          </SideBySide>
        </Container>
      </section>

      <section className="page-section page-section--medium">
        <Container>
          <div className="page-media-text">
            <MediaSquareSmall src={validationLotti} />
            <div>
              <h2>Категория уже валидирована в мире:</h2>
              <p>Wysa (1 млрд+ AI-разговоров, 105 стран) и Unmind (+30,7% уверенности руководителей, RCT).</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section" id="start">
        <Container>
          <SideBySide variant="equal">
            <div className="page-region page-start-copy">
              <SectionHeading
                description="Не нужно перестраивать HR-процессы или запускать большой IT-проект. Начните с одной группы."
                title="Быстро запустить, проверить и масштабировать"
              />
              <Button>Обсудить запуск для команды</Button>
            </div>
            <div className="page-steps">
              {steps.map((step, index) => (
                <article className="page-step-card" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}.</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </SideBySide>
        </Container>
      </section>

      <section className="page-section" id="faq">
        <Container>
          <SectionHeading title="Что обычно спрашивают перед запуском" />
          <div className="page-faq-list">
            {faqItems.map((item, index) => (
              <div
                className="page-faq-control"
                id={index === 0 ? 'faq-chatgpt' : undefined}
                key={item.question}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setOpenFaqIndex(openFaqIndex === index ? null : index);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <FAQItem
                  answer={item.answer}
                  question={item.question}
                  state={openFaqIndex === index ? 'active' : 'default'}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <footer className="page-footer">
        <div className="page-footer__surface">
          <Container className="page-footer__container">
            <div className="page-footer__main">
              <FooterGraphic />
              <div className="page-footer__heading">
                <p>Не нужно разбираться в&nbsp;одиночку.</p>
                <p>Напишите, даже если не знаете, с&nbsp;чего начать.</p>
              </div>
              <Button>Сделать первый шаг</Button>
            </div>
            <div className="page-footer__links">
              <div>
                <Link destination="anchor" href="mailto:letsconnect@humanteq.io">Написать нам письмо</Link>
                <Link destination="anchor" href="https://vk.com/im/convo/-216190593">Поддержка</Link>
                <span>© 2026&nbsp;Humanteq</span>
              </div>
              <div>
                <Link destination="anchor" href="/consent_user_agreement">Согласие на обработку персональных данных</Link>
                <Link destination="anchor" href="/user_agreement">Политика конфиденциальности</Link>
                <Link destination="anchor" href="/sending_electronic_messages">Согласие на рассылку</Link>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </main>
  );
}

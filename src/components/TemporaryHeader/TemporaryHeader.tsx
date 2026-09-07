import { useState } from 'react';

import logoB2b from '../../assets/logo-b2b.svg';
import { Link } from '../../design-system/components';
import { Container } from '../../design-system/layout';
import './TemporaryHeader.css';

const navItems = [
  { label: 'B2C', href: undefined },
  { label: 'Задача', href: '#task' },
  { label: 'Пробел', href: '#gap' },
  { label: 'Решение', href: '#solution' },
  { label: 'Безопасность', href: '#safety' },
  { label: 'Как начать', href: '#start' },
  { label: 'FAQ', href: '#faq' },
  {
    destination: 'external' as const,
    label: 'Для сотрудников',
    href: 'https://app.humanteq.com/welcome',
  },
];

export function TemporaryHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((current) => !current);

  return (
    <header className="temporary-header">
      <Container className="temporary-header__inner">
        <a aria-label="Humanteq" className="temporary-header__brand" href="/" onClick={closeMenu}>
          <img alt="" src={logoB2b} />
        </a>

        <nav aria-label="Навигация по странице" className="temporary-header__nav">
          {navItems.map((item) =>
            item.href ? (
              <Link
                destination={item.destination ?? 'anchor'}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-disabled="true" className="temporary-header__disabled-link" key={item.label}>
                {item.label}
              </span>
            ),
          )}
        </nav>

        <Link className="temporary-header__cta" destination="anchor" href="#start" presentation="filled">
          Оставить заявку
        </Link>

        <button
          aria-controls="temporary-header-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          className="temporary-header__burger"
          onClick={toggleMenu}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </Container>

      <div
        className="temporary-header__mobile-menu"
        hidden={!isOpen}
        id="temporary-header-menu"
      >
        <Container className="temporary-header__mobile-menu-inner">
          {navItems.map((item) =>
            item.href ? (
              <Link
                destination={item.destination ?? 'anchor'}
                href={item.href}
                key={item.label}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-disabled="true" className="temporary-header__disabled-link" key={item.label}>
                {item.label}
              </span>
            ),
          )}
          <Link
            className="temporary-header__mobile-cta"
            destination="anchor"
            href="#start"
            onClick={closeMenu}
            presentation="filled"
          >
            Оставить заявку
          </Link>
        </Container>
      </div>
    </header>
  );
}

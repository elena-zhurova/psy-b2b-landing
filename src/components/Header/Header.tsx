import { useState } from 'react';

import b2bLg from '../../assets/header/b2b-lg.svg';
import b2bSm from '../../assets/header/b2b-sm.svg';
import burgerIcon from '../../assets/header/burger.svg';
import closeIcon from '../../assets/header/close.svg';
import logoLg from '../../assets/header/logo-lg.svg';
import logoSm from '../../assets/header/logo-sm.svg';
import { Button, Link } from '../../design-system/components';
import { Container } from '../../design-system/layout';
import './Header.css';

type HeaderNavItem = {
  destination?: 'anchor' | 'external';
  href?: string;
  label: string;
};

const navItems: HeaderNavItem[] = [
  { label: 'B2C' },
  { label: 'Задача', href: '#stats' },
  { label: 'Пробел', href: '#psy-information' },
  { label: 'Решение', href: '#solution' },
  { label: 'Безопасность', href: '#safety' },
  { label: 'Как начать', href: '#start' },
  { label: 'FAQ', href: '#faq' },
  {
    destination: 'external',
    href: 'https://app.humanteq.com/welcome',
    label: 'Для сотрудников',
  },
];

function HeaderLogo() {
  return (
    <a aria-label="Humanteq для бизнеса" className="site-header__brand" href="#hero">
      <picture>
        <source media="(max-width: 1279px)" srcSet={logoSm} />
        <img alt="" className="site-header__logo-main" src={logoLg} />
      </picture>
      <picture>
        <source media="(max-width: 1279px)" srcSet={b2bSm} />
        <img alt="" className="site-header__logo-badge" src={b2bLg} />
      </picture>
    </a>
  );
}

function HeaderNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navItems.map((item) =>
        item.href ? (
          <Link
            destination={item.destination ?? 'anchor'}
            href={item.href}
            key={item.label}
            onClick={onNavigate}
            presentation="neutral"
          >
            {item.label}
          </Link>
        ) : (
          <span aria-disabled="true" className="site-header__disabled-link" key={item.label}>
            {item.label}
          </span>
        ),
      )}
    </>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((current) => !current);
  const handleCtaClick = () => {
    closeMenu();
    document.getElementById('start')?.scrollIntoView();
    window.history.pushState(null, '', '#start');
  };

  return (
    <header className="site-header">
      <Container className="site-header__bar">
        <HeaderLogo />

        <div className="site-header__content">
          <nav aria-label="Навигация по странице" className="site-header__nav">
            <HeaderNav />
          </nav>
          <Button
            className="site-header__cta"
            onClick={handleCtaClick}
          >
            Оставить заявку
          </Button>
        </div>

        <button
          aria-controls="site-header-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          className="site-header__burger"
          onClick={toggleMenu}
          type="button"
        >
          <img alt="" src={isOpen ? closeIcon : burgerIcon} />
        </button>
      </Container>

      <div className="site-header__dropdown" hidden={!isOpen} id="site-header-menu">
        <Container className="site-header__dropdown-inner">
          <nav aria-label="Навигация по странице" className="site-header__dropdown-nav">
            <HeaderNav onNavigate={closeMenu} />
          </nav>
          <Button
            className="site-header__dropdown-cta"
            onClick={handleCtaClick}
          >
            Оставить заявку
          </Button>
        </Container>
      </div>
    </header>
  );
}

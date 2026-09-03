import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './design-system/tokens/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main
      style={{
        color: 'var(--semantic-color-text-primary)',
        fontFamily: 'var(--primitives-type-family-primary)',
        padding: 'var(--semantic-spacing-surface-comfortable)',
      }}
    >
      Humanteq design system
    </main>
  </StrictMode>,
);

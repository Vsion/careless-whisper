import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    layout: {
      padding: '0 3rem',
      position: 'relative',
    },
    homeanchor: {
      position: 'fixed',
      right: 0,
      top: 100,
      width: 180
    },
    title: {
      maxWidth: '100%',
      width: 'var(--max-width)',
      margin: '0 auto',
      padding: '68px 0 24px 0',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(25%, auto))',
      maxWidth: '100%',
      width: 'var(--max-width)',
      margin: '0 auto',
    },
    card: {
      padding: '1rem 1.2rem',
      marginRight: '1rem',
      marginBottom: '1rem',
      borderRadius: 'var(--border-radius)',
      background: 'rgba(var(--card-rgb), 0.1)',
      border: '1px solid rgba(var(--card-border-rgb), 0.15)',
      transition: 'background 200ms, border 200ms, box-shadow 0.2s',
      color: token.colorText,
      '&:hover': {
        color: token.colorText,
        boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
        span: {
          transform: 'translateX(4px)',
        }
      },
      span: {
        display: 'inline-block',
        transition: 'transform 200ms',
      },
      h2: {
        fontWeight: 600,
        marginBottom: '0.7rem',
      },
      p: {
        margin: 0,
        opacity: 0.6,
        fontSize: '0.9rem',
        lineHeight: 1.5,
        maxWidth: '30ch',
      },
    },
    logo: {
      position: 'relative',
      margin: '0 auto',
      display: 'block',
    }
  }
})
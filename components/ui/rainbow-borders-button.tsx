import React from 'react';

interface Props {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function RainbowBorderButton({ href, children, className = '' }: Props) {
  const cls = `rainbow-border-btn${className ? ' ' + className : ''}`;

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <button className={cls}>{children}</button>;
}

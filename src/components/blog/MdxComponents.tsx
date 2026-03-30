import type { MDXComponents } from 'mdx/types'
import type { AnchorHTMLAttributes, BlockquoteHTMLAttributes, HTMLAttributes } from 'react'

const headingBase = {
  fontFamily: 'var(--font-serif)',
  color: '#F2F0E8',
  lineHeight: 1.25,
  marginTop: '2em',
  marginBottom: '0.6em',
}

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      style={{ ...headingBase, fontWeight: 400, fontSize: 'clamp(28px, 3vw, 38px)' }}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      style={{
        ...headingBase,
        fontWeight: 400,
        fontSize: 'clamp(22px, 2.4vw, 30px)',
        borderBottom: '0.5px solid rgba(201,169,110,0.12)',
        paddingBottom: '0.4em',
      }}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      style={{ ...headingBase, fontWeight: 500, fontSize: 'clamp(18px, 2vw, 22px)', color: '#C9A96E' }}
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: '16px',
        color: '#9C9A8E',
        lineHeight: 1.85,
        marginBottom: '1.4em',
      }}
      {...props}
    >
      {children}
    </p>
  ),
  strong: ({ children, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: '#E2CFA0', fontWeight: 500 }} {...props}>
      {children}
    </strong>
  ),
  ul: ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: '16px',
        color: '#9C9A8E',
        lineHeight: 1.85,
        paddingLeft: '1.5em',
        marginBottom: '1.4em',
        listStyleType: 'disc',
      }}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: '16px',
        color: '#9C9A8E',
        lineHeight: 1.85,
        paddingLeft: '1.5em',
        marginBottom: '1.4em',
        listStyleType: 'decimal',
      }}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li style={{ marginBottom: '0.4em' }} {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      style={{
        borderLeft: '3px solid #C9A96E',
        paddingLeft: '20px',
        margin: '1.6em 0',
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: '18px',
        color: '#F2F0E8',
        lineHeight: 1.6,
      }}
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      style={{ color: '#C9A96E', textDecoration: 'underline', textDecorationColor: 'rgba(201,169,110,0.4)' }}
      {...props}
    >
      {children}
    </a>
  ),
  hr: () => (
    <hr
      style={{
        border: 'none',
        borderTop: '0.5px solid rgba(201,169,110,0.15)',
        margin: '2.5em 0',
      }}
    />
  ),
}

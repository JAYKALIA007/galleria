import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const TEXT_CLASSES = `text-gray-800 dark:text-gray-300`;
const LINK_TEXT_CLASSES = `text-blue-700 dark:text-blue-500 cursor:`;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className={`${TEXT_CLASSES} text-lg md:text-base font-medium pt-12 my-2 fade-in`}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className={`${TEXT_CLASSES} text-base md:text-sm font-medium mt-6 mb-3`}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className={`${TEXT_CLASSES} text-sm md:text-xs font-medium mt-8 mb-3`}
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p className={`${TEXT_CLASSES} leading-snug`} {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className={`${TEXT_CLASSES} list-decimal pl-5 space-y-2`} {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className={`${TEXT_CLASSES} list-disc pl-5 space-y-1`} {...props} />
  ),
  li: (props: ListItemProps) => <li className="my-2" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = `${LINK_TEXT_CLASSES} hover:underline underline-offset-4`;
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}

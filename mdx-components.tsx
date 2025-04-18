import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const TEXT_COLOR_CLASSES = `text-gray-800 dark:text-gray-300`;
const LINK_TEXT_COLOR_CLASSES = `text-blue-700 dark:text-blue-500 cursor:`;
const TEXT_SIZE_CLASSES = `text-xs`;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className={`${TEXT_COLOR_CLASSES} leading-6 md:text-base text-sm font-medium my-2 fade-in`}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className={`${TEXT_COLOR_CLASSES} leading-6 md:text-sm text-xs font-medium mt-6 mb-3`}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className={`${TEXT_COLOR_CLASSES} leading-6 md:text-xs text-[10px] font-medium mt-8 mb-3`}
      {...props}
    />
  ),
  p: (props: ParagraphProps) => (
    <p className={`${TEXT_COLOR_CLASSES} leading-6 leading-snug`} {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className={`${TEXT_COLOR_CLASSES} ${TEXT_SIZE_CLASSES} leading-4 list-decimal pl-5 space-y-2`}
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className={`${TEXT_COLOR_CLASSES} ${TEXT_SIZE_CLASSES} leading-4 list-disc pl-5 space-y-1`}
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="my-2" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = `${LINK_TEXT_COLOR_CLASSES} ${TEXT_SIZE_CLASSES} hover:underline underline-offset-4`;
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
    return (
      <div className="leading-6 p-4 text-xs mb-4 mt-6 overflow-x-auto rounded-lg border border-gray-100 bg-gray-100 dark:border-gray-900 dark:bg-zinc-900">
        <code 
          dangerouslySetInnerHTML={{ __html: codeHTML }} 
          className="block text-gray-400 dark:text-gray-300 text-[0.9rem]"
          {...props} 
        />
      </div>
    );
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

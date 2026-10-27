import React from 'react';

interface BlogContentProps {
  content: string;
  className?: string;
}

export function BlogContent({ content, className = '' }: BlogContentProps) {
  const blocks = content.split(/\r?\n\r?\n/);

  return (
    <div className={`prose prose-slate max-w-none text-foreground/90 space-y-6 text-base sm:text-lg leading-relaxed ${className}`}>
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Heading 2
        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={index}
              className="text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-4 pt-4 border-t border-border/40 tracking-tight"
            >
              {trimmed.replace(/^##\s+/, '')}
            </h2>
          );
        }

        // Heading 3
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl sm:text-2xl font-bold text-foreground mt-6 mb-3 tracking-tight">
              {trimmed.replace(/^###\s+/, '')}
            </h3>
          );
        }

        // Blockquote
        if (trimmed.startsWith('> ')) {
          const quoteText = trimmed.replace(/^>\s+/, '').replace(/^"(.*)"$/, '$1');
          return (
            <blockquote
              key={index}
              className="border-l-4 border-primary pl-6 py-2 my-6 italic text-foreground bg-primary/5 rounded-r-xl font-medium"
            >
              &ldquo;{quoteText}&rdquo;
            </blockquote>
          );
        }

        // Bullet List
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split(/\r?\n/).map((line) => line.replace(/^[-*]\s+/, ''));
          return (
            <ul key={index} className="list-disc list-inside space-y-2.5 my-4 pl-2 text-foreground/85">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                </li>
              ))}
            </ul>
          );
        }

        // Numbered List
        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed.split(/\r?\n/).map((line) => line.replace(/^\d+\.\s+/, ''));
          return (
            <ol key={index} className="list-decimal list-inside space-y-2.5 my-4 pl-2 text-foreground/85">
              {items.map((item, itemIdx) => (
                <li key={itemIdx} className="leading-relaxed">
                  <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                </li>
              ))}
            </ol>
          );
        }

        // Regular paragraph with inline formatting
        return (
          <p
            key={index}
            className="leading-relaxed text-foreground/85"
            dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
          />
        );
      })}
    </div>
  );
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded-md bg-muted text-primary text-sm font-mono">$1</code>');
}

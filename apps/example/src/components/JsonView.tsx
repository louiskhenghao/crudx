/**
 * JsonView
 * --------------------------------
 *
 * Pretty-printed JSON panel used inside `renderDetailsView` on the
 * demo pages. Renders a syntax-highlighted code block with keys,
 * strings, numbers, booleans and `null` in distinct colours, plus a
 * "Copy" affordance and graceful loading / empty states.
 *
 * Hand-rolled tokeniser (no dep on a syntax-highlighter package) —
 * the input is `JSON.stringify` output, which is a small and well-
 * defined grammar.
 */

import { Fragment, ReactNode, useMemo, useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

export type JsonViewProps = {
  /** The value to render. Anything `JSON.stringify` accepts. */
  data: unknown;
  /** Loading state — shows a spinner instead of the JSON. */
  loading?: boolean;
  /** Extra header rendered to the right of the title. */
  headerActions?: ReactNode;
  /** Title shown in the header bar. */
  title?: string;
};

const TOKEN_COLORS = {
  key: '#9333EA', // purple
  string: '#16A34A', // green
  number: '#EA580C', // orange
  boolean: '#2563EB', // blue
  null: '#737373', // gray
  punctuation: '#52525B', // slate
} as const;

/**
 * Walk the JSON.stringify output and emit `{ type, value }` tokens
 * we can colour-code. Strings and keys are detected by tracking
 * whether we're inside a string literal and whether the next
 * non-whitespace char after the closing quote is `:` (key) or
 * something else (string value).
 */
type Token =
  | { type: 'key'; value: string }
  | { type: 'string'; value: string }
  | { type: 'number'; value: string }
  | { type: 'boolean'; value: string }
  | { type: 'null'; value: string }
  | { type: 'punctuation'; value: string }
  | { type: 'whitespace'; value: string };

function tokenize(json: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < json.length) {
    const ch = json[i];

    // string literal
    if (ch === '"') {
      let j = i + 1;
      while (j < json.length) {
        if (json[j] === '\\') {
          j += 2;
          continue;
        }
        if (json[j] === '"') break;
        j += 1;
      }
      const value = json.slice(i, j + 1);
      // peek past whitespace to decide key vs string
      let k = j + 1;
      while (k < json.length && /\s/.test(json[k])) k += 1;
      const isKey = json[k] === ':';
      tokens.push({ type: isKey ? 'key' : 'string', value });
      i = j + 1;
      continue;
    }

    // number
    if (/[-0-9]/.test(ch)) {
      let j = i;
      while (j < json.length && /[-0-9.eE+]/.test(json[j])) j += 1;
      tokens.push({ type: 'number', value: json.slice(i, j) });
      i = j;
      continue;
    }

    // true / false
    if (json.startsWith('true', i) || json.startsWith('false', i)) {
      const value = json.startsWith('true', i) ? 'true' : 'false';
      tokens.push({ type: 'boolean', value });
      i += value.length;
      continue;
    }

    // null
    if (json.startsWith('null', i)) {
      tokens.push({ type: 'null', value: 'null' });
      i += 4;
      continue;
    }

    // whitespace (preserve newlines + indent so output is readable)
    if (/\s/.test(ch)) {
      let j = i;
      while (j < json.length && /\s/.test(json[j])) j += 1;
      tokens.push({ type: 'whitespace', value: json.slice(i, j) });
      i = j;
      continue;
    }

    // punctuation: { } [ ] : ,
    tokens.push({ type: 'punctuation', value: ch });
    i += 1;
  }
  return tokens;
}

function HighlightedJson({ value }: { value: string }) {
  const tokens = useMemo(() => tokenize(value), [value]);
  return (
    <Box
      component="pre"
      sx={{
        m: 0,
        fontFamily:
          '"JetBrains Mono", "Fira Code", "SF Mono", Menlo, Consolas, monospace',
        fontSize: 13,
        lineHeight: 1.55,
        whiteSpace: 'pre',
        overflow: 'auto',
      }}
    >
      <code>
        {tokens.map((tok, idx) => {
          if (tok.type === 'whitespace') {
            return <Fragment key={idx}>{tok.value}</Fragment>;
          }
          return (
            <span
              key={idx}
              style={{
                color: TOKEN_COLORS[tok.type],
                fontWeight: tok.type === 'key' ? 600 : 400,
              }}
            >
              {tok.value}
            </span>
          );
        })}
      </code>
    </Box>
  );
}

export function JsonView({
  data,
  loading,
  headerActions,
  title = 'Response',
}: JsonViewProps) {
  const [copied, setCopied] = useState(false);

  const json = useMemo(() => {
    try {
      return JSON.stringify(data, null, 2);
    } catch {
      return String(data);
    }
  }, [data]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard might be unavailable; silently no-op
    }
  };

  const isEmpty = data === null || data === undefined;

  return (
    <Box
      sx={{
        borderRadius: 2,
        border: 1,
        borderColor: 'divider',
        overflow: 'hidden',
        bgcolor: '#FAFAFA',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: 2,
          py: 1,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: '#F4F4F5',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              fontFamily: 'monospace',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 0.5,
              color: 'text.secondary',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Box>
          {!loading && !isEmpty ? (
            <Box
              sx={{
                fontSize: 10,
                fontFamily: 'monospace',
                color: 'text.secondary',
                bgcolor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: 0.75,
                px: 0.75,
                py: 0.125,
              }}
            >
              JSON
            </Box>
          ) : null}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          {headerActions}
          {!loading && !isEmpty ? (
            <Tooltip title={copied ? 'Copied!' : 'Copy JSON'}>
              <IconButton
                size="small"
                onClick={handleCopy}
                aria-label="Copy JSON"
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          ) : null}
        </Stack>
      </Stack>
      <Box sx={{ px: 2, py: 1.5, maxHeight: 480, overflow: 'auto' }}>
        {loading ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ py: 4, gap: 1.5 }}
          >
            <CircularProgress size={22} />
            <Typography variant="caption" color="text.secondary">
              Loading…
            </Typography>
          </Stack>
        ) : isEmpty ? (
          <Box sx={{ py: 4, textAlign: 'center' }}>
            <Typography variant="caption" color="text.secondary">
              No data to display.
            </Typography>
          </Box>
        ) : (
          <HighlightedJson value={json} />
        )}
      </Box>
    </Box>
  );
}

export default JsonView;

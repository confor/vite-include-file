import { readFileSync } from 'fs';

// matches <include>, <include/> and <include />
const TAG_REGEX = /<include file="([^"]+)" ?\/?>/g;

function transformIndexHtml(html) {
  const matches = html.matchAll(TAG_REGEX);

  for (const [match, src] of matches) {
    try {
      const content = readFileSync(src, 'utf-8');
      html = html.replace(match, content);
    } catch (err) {
      console.error(`error ${err} in file ${src}`);
    }
  }

  return html;
}

export default function includeFile(config) {
  return {
    name: 'include-file',

    // run this plugin before other plugins
    enforce: 'pre',

    // https://vite.dev/guide/api-plugin#transformindexhtml
    transformIndexHtml
  }
}

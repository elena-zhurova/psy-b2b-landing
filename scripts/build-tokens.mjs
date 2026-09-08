import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const tokensDir = path.join(rootDir, 'src/design-system/tokens');

const header = '/* AUTO-GENERATED FROM DESIGN TOKENS. DO NOT EDIT MANUALLY. */';

const tokenFiles = {
  primitives: path.join(tokensDir, 'primitives.tokens.json'),
  typography: path.join(tokensDir, 'typography.tokens.json'),
  localColor: path.join(tokensDir, 'local.color.tokens.json'),
  semanticColors: path.join(tokensDir, 'semantic colors.tokens.json'),
};

const responsiveConfigPath = path.join(tokensDir, 'responsive.config.json');
const semanticSizesModeDir = path.join(tokensDir, 'semantic sizes');

const fontFaces = [
  {
    family: 'TT Chocolates VF Trial',
    style: 'normal',
    weight: 400,
    src: "/fonts/TT_Chocolates_Trial_Regular.woff2",
    format: 'woff2',
  },
  {
    family: 'TT Chocolates VF Trial',
    style: 'normal',
    weight: 500,
    src: "/fonts/TT_Chocolates_Trial_Medium.woff2",
    format: 'woff2',
  },
  {
    family: 'TT Chocolates VF Trial',
    style: 'normal',
    weight: 600,
    src: "/fonts/TT_Chocolates_Trial_DemiBold.woff2",
    format: 'woff2',
  },
  {
    family: 'TT Livret Trial Italic Variable',
    style: 'italic',
    weight: 400,
    src: "/fonts/TT%20Livret%20Text%20Trial%20Italic.ttf",
    format: 'truetype',
  },
  {
    family: 'TT Livret Trial Italic Variable',
    style: 'normal',
    weight: 500,
    src: "/fonts/TT%20Livret%20Text%20Trial%20Medium.ttf",
    format: 'truetype',
  },
];

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function semanticModeFile(mode, modeDir) {
  const candidates = [
    path.join(modeDir, `${mode}.json`),
    path.join(modeDir, `${mode}.tokens.json`),
  ];
  const file = candidates.find((candidate) => fs.existsSync(candidate));
  if (!file) {
    throw new Error(`Missing semantic mode token file for ${mode}`);
  }
  return file;
}

function merge(target, source) {
  for (const [key, value] of Object.entries(source ?? {})) {
    if (isPlainObject(value) && !isToken(value)) {
      target[key] ??= {};
      merge(target[key], value);
    } else {
      target[key] = value;
    }
  }
  return target;
}

function withoutTokenMetadata(source) {
  return Object.fromEntries(
    Object.entries(source ?? {}).filter(([key]) => !key.startsWith('$')),
  );
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isToken(value) {
  return isPlainObject(value) && '$value' in value;
}

function kebab(value) {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function cssName(pathParts) {
  return `--${pathParts.map(kebab).join('-')}`;
}

function normalizeTokenRef(ref, pathParts) {
  const normalized = ref.replaceAll('/', '.');

  if (normalized.startsWith('primitives.') || normalized.startsWith('semantic.')) {
    return normalized;
  }

  if (pathParts[0] === 'semantic' && pathParts[1] === 'color') {
    return `semantic.color.${normalized}`;
  }

  return normalized;
}

function tokenRefToCssVar(ref, pathParts) {
  return `var(${cssName(normalizeTokenRef(ref, pathParts).split('.'))})`;
}

function figmaAliasRef(token) {
  return token.$extensions?.['com.figma.aliasData']?.targetVariableName;
}

function formatCssValue(token, pathParts) {
  const value = token.$value;

  if (typeof value === 'string') {
    const alias = value.match(/^\{([^}]+)\}$/);
    if (alias) return tokenRefToCssVar(alias[1], pathParts);
    if (token.$type === 'fontFamily') return `'${value}'`;
    return value;
  }

  const figmaAlias = figmaAliasRef(token);
  if (figmaAlias) return tokenRefToCssVar(figmaAlias, pathParts);

  if (typeof value === 'number') {
    if (token.$type === 'fontWeight' || token.$type === 'letterSpacing') {
      return String(value);
    }

    if (pathParts.includes('letterSpacing')) return String(value);
    if (pathParts.includes('weight')) return String(value);
    if (pathParts.includes('size') || pathParts.includes('spacing') || pathParts.includes('radius')) {
      return `${value}px`;
    }

    return value === 0 ? '0' : `${value}px`;
  }

  if (isPlainObject(value) && token.$type === 'color') {
    return formatColor(value);
  }

  return String(value);
}

function formatColor(value) {
  if (value.hex && value.alpha === 1) return value.hex.toLowerCase();
  if (value.hex && value.alpha === 0) return `rgb(${hexToRgb(value.hex).join(' ')} / 0)`;
  if (value.hex && typeof value.alpha === 'number') {
    return `rgb(${hexToRgb(value.hex).join(' ')} / ${trimNumber(value.alpha)})`;
  }
  return JSON.stringify(value);
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '');
  return [0, 2, 4].map((index) => parseInt(normalized.slice(index, index + 2), 16));
}

function trimNumber(value) {
  return Number.parseFloat(value.toFixed(4));
}

function collectTokens(node, pathParts = [], output = []) {
  if (!isPlainObject(node)) return output;
  if (isToken(node)) {
    output.push({ pathParts, token: node });
    return output;
  }

  for (const [key, value] of Object.entries(node)) {
    collectTokens(value, pathParts.concat(key), output);
  }

  return output;
}

function valueKey(entry) {
  return JSON.stringify({
    type: entry.token.$type,
    value: entry.token.$value,
  });
}

function entriesByName(entries) {
  return new Map(entries.map((entry) => [cssName(entry.pathParts), entry]));
}

function collectSemanticTokens(node, pathParts = [], output = [], responsive = []) {
  if (!isPlainObject(node)) return { output, responsive };
  if (isToken(node)) {
    output.push({ pathParts, token: node });
    return { output, responsive };
  }

  if (hasResponsiveFontSize(node)) {
    for (const [key, value] of Object.entries(node)) {
      if (key === 'fontSize') continue;
      collectSemanticTokens(value, pathParts.concat(key), output, responsive);
    }
    responsive.push({ pathParts: pathParts.concat('fontSize'), fontSize: node.fontSize });
    return { output, responsive };
  }

  for (const [key, value] of Object.entries(node)) {
    collectSemanticTokens(value, pathParts.concat(key), output, responsive);
  }

  return { output, responsive };
}

function hasResponsiveFontSize(node) {
  return isPlainObject(node.fontSize)
    && isToken(node.fontSize.narrow)
    && isToken(node.fontSize.medium)
    && isToken(node.fontSize.wide);
}

function declaration(entry) {
  return `  ${cssName(entry.pathParts)}: ${formatCssValue(entry.token, entry.pathParts)};`;
}

function responsiveDeclaration(pathParts, token) {
  return `    ${cssName(pathParts)}: ${formatCssValue(token, pathParts)};`;
}

function baseResponsiveDeclaration(pathParts, token) {
  return `  ${cssName(pathParts)}: ${formatCssValue(token, pathParts)};`;
}

function fontFaceBlock(font) {
  return [
    '@font-face {',
    `  font-family: '${font.family}';`,
    `  font-style: ${font.style};`,
    `  font-weight: ${font.weight};`,
    `  src: url('${font.src}') format('${font.format}');`,
    '}',
  ].join('\n');
}

function buildPrimitivesCss(primitives, responsiveConfig) {
  const entries = collectTokens(primitives);
  const layoutEntries = [
    ['layout', 'mode', 'narrow', 'minWidth', responsiveConfig.modes.narrow.minWidth],
    ['layout', 'mode', 'narrow', 'maxWidth', responsiveConfig.modes.narrow.maxWidth],
    ['layout', 'mode', 'medium', 'minWidth', responsiveConfig.modes.medium.minWidth],
    ['layout', 'mode', 'medium', 'maxWidth', responsiveConfig.modes.medium.maxWidth],
    ['layout', 'mode', 'wide', 'minWidth', responsiveConfig.modes.wide.minWidth],
  ].map(([layer, group, mode, key, value]) => ({
    pathParts: [layer, group, mode, key],
    token: { $type: 'dimension', $value: value },
  }));

  return [
    header,
    '',
    ...fontFaces.flatMap((font) => [fontFaceBlock(font), '']),
    ':root {',
    ...entries.map(declaration),
    '',
    '  /* Technical responsive configuration, not design tokens. */',
    ...layoutEntries.map(declaration),
    '}',
    '',
  ].join('\n');
}

function buildSemanticCss(semanticColors, semanticSizeModes, typographySemantic, responsiveConfig) {
  const colorEntries = collectTokens(semanticColors);
  const narrowEntries = collectTokens(semanticSizeModes.narrow);
  const mediumEntries = entriesByName(collectTokens(semanticSizeModes.medium));
  const wideEntries = entriesByName(collectTokens(semanticSizeModes.wide));
  const baseSemantic = [];
  const responsiveSemantic = [];

  for (const narrowEntry of narrowEntries) {
    const name = cssName(narrowEntry.pathParts);
    const mediumEntry = mediumEntries.get(name);
    const wideEntry = wideEntries.get(name);

    if (!mediumEntry || !wideEntry) {
      throw new Error(`Semantic mode token path mismatch: ${name}`);
    }

    if (valueKey(narrowEntry) === valueKey(mediumEntry) && valueKey(mediumEntry) === valueKey(wideEntry)) {
      baseSemantic.push(narrowEntry);
    } else {
      responsiveSemantic.push({
        pathParts: narrowEntry.pathParts,
        narrow: narrowEntry.token,
        medium: mediumEntry.token,
        wide: wideEntry.token,
      });
    }
  }

  const { output: typographyOutput, responsive: responsiveTypography } = collectSemanticTokens(typographySemantic);
  const mediumMin = responsiveConfig.modes.medium.minWidth;
  const wideMin = responsiveConfig.modes.wide.minWidth;

  return [
    header,
    '',
    "@import './primitives.css';",
    '',
    ':root {',
    ...colorEntries.map(declaration),
    ...baseSemantic.map(declaration),
    ...responsiveSemantic.map((entry) => baseResponsiveDeclaration(entry.pathParts, entry.narrow)),
    ...typographyOutput.map(declaration),
    ...responsiveTypography.map((entry) => baseResponsiveDeclaration(entry.pathParts, entry.fontSize.narrow)),
    '}',
    '',
    `@media (min-width: ${mediumMin}px) {`,
    '  :root {',
    ...responsiveSemantic.map((entry) => responsiveDeclaration(entry.pathParts, entry.medium)),
    ...responsiveTypography.map((entry) => responsiveDeclaration(entry.pathParts, entry.fontSize.medium)),
    '  }',
    '}',
    '',
    `@media (min-width: ${wideMin}px) {`,
    '  :root {',
    ...responsiveSemantic.map((entry) => responsiveDeclaration(entry.pathParts, entry.wide)),
    ...responsiveTypography.map((entry) => responsiveDeclaration(entry.pathParts, entry.fontSize.wide)),
    '  }',
    '}',
    '',
  ].join('\n');
}

const primitivesJson = readJson(tokenFiles.primitives);
const typographyJson = readJson(tokenFiles.typography);
const localColorJson = readJson(tokenFiles.localColor);
const semanticColorsJson = readJson(tokenFiles.semanticColors);
const responsiveConfig = readJson(responsiveConfigPath);
const semanticSizeModeJson = {
  narrow: readJson(semanticModeFile('narrow', semanticSizesModeDir)),
  medium: readJson(semanticModeFile('medium', semanticSizesModeDir)),
  wide: readJson(semanticModeFile('wide', semanticSizesModeDir)),
};

const primitiveSources = merge(
  merge(merge({}, primitivesJson.primitives), typographyJson.primitives),
  localColorJson.primitives,
);
const semanticColorSources = merge(
  { semantic: { color: merge({}, semanticColorsJson.semantic?.color ?? withoutTokenMetadata(semanticColorsJson)) } },
  localColorJson.semantic ? { semantic: localColorJson.semantic } : {},
);
const semanticSizeModeSources = Object.fromEntries(
  Object.entries(semanticSizeModeJson).map(([mode, json]) => [
    mode,
    { semantic: merge({}, json.semantic) },
  ]),
);

fs.writeFileSync(
  path.join(tokensDir, 'primitives.css'),
  buildPrimitivesCss({ primitives: primitiveSources }, responsiveConfig),
);
fs.writeFileSync(
  path.join(tokensDir, 'semantic.css'),
  buildSemanticCss(semanticColorSources, semanticSizeModeSources, { semantic: typographyJson.semantic }, responsiveConfig),
);

import fs from 'node:fs';
import ts from 'typescript';

const files = [
  'src/App.tsx',
  'src/siteContent.ts',
  'src/components/Dashboard.tsx',
  'src/components/EpistemicChart.tsx',
  'src/main.tsx',
];

let failed = false;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const result = ts.transpileModule(source, {
    compilerOptions: {
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: file,
    reportDiagnostics: true,
  });

  const diagnostics = result.diagnostics ?? [];
  if (diagnostics.length > 0) {
    failed = true;
    console.error(`${file}: failed to parse`);
    for (const diagnostic of diagnostics) {
      console.error(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
    }
  } else {
    console.log(`${file}: parsed successfully`);
  }
}

if (failed) {
  process.exit(1);
}

import { program } from 'commander';
import { generateFullTypedFile } from './generateFile';
import { writeFile } from 'node:fs/promises';
program
  .name('ts-codegen')
  .argument('<file>', 'input file path')
  .option(
    '-o, --output <file>',
    'output file path',
    process.cwd() + '/output.ts'
  )
  .action(async (input, options) => {
    if (!input) {
      console.error('input file path required');
      return;
    }
    const file = await generateFullTypedFile(input);
    const fileContentAsString = file.getFullText();
    await writeFile(options.output, fileContentAsString);
    return;
  });

program.parse();

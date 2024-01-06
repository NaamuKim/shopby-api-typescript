import { program } from 'commander';
import { generateFullTypedFile } from './generateFile';
import { writeFile } from 'node:fs/promises';
program
  .name('ts-codegen')
  .argument('<file>', 'input file path')
  .option(
    '-o, --output <output>',
    'output file path',
    process.cwd() + '/output.ts'
  )
  .action(async (input, options) => {
    if (!input) {
      console.error('input file path required');
      return;
    }
    // TODO: output 옵션이 감지되지 않는 에러 발생
    const file = await generateFullTypedFile(input);
    const fileContentAsString = file.getFullText();
    await writeFile(options.output, fileContentAsString);
    return;
  });

program.parse();

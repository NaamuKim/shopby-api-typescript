import { SourceFile, SyntaxKind } from 'ts-morph';

function makeHeaderOptional(sourceFile: SourceFile) {
  sourceFile.forEachDescendant((node) => {
    if (node.getKind() === SyntaxKind.PropertySignature) {
      const property = node.asKind(SyntaxKind.PropertySignature);
      if (property?.getText().includes('header')) {
        property.setHasQuestionToken(true);
      }
    }
  });
  return sourceFile;
}

export default makeHeaderOptional;

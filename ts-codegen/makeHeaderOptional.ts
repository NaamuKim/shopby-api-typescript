import { SourceFile, SyntaxKind } from 'ts-morph';

function makeHeaderOptional(sourceFile: SourceFile) {
  sourceFile.forEachDescendant((node) => {
    if (node.getKind() === SyntaxKind.PropertySignature) {
      const property = node.asKind(SyntaxKind.PropertySignature);
      if (property?.getText().startsWith('header')) {
        property.setHasQuestionToken(true);
        property?.getChildren()?.forEach((node) => {
          const headerTypeObj = node.asKind(SyntaxKind.TypeLiteral);
          headerTypeObj
            ?.getDescendantsOfKind(SyntaxKind.PropertySignature)
            ?.forEach((node) => {
              node.setHasQuestionToken(true);
            });
        });
      }
    }
  });
  return sourceFile;
}

export default makeHeaderOptional;

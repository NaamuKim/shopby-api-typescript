import { SourceFile, SyntaxKind } from 'ts-morph';

function makeHeaderOptional(sourceFile: SourceFile) {
  sourceFile.forEachDescendant((node) => {
    if (node.getKind() === SyntaxKind.PropertySignature) {
      const property = node.asKind(SyntaxKind.PropertySignature);
      // 내부에서 header 만 optional 돼야하는데 header 포함한 모든 property 가 optional 되는 문제가 있음
      if (property?.getText().includes('header')) {
        property.setHasQuestionToken(true);
      }
    }
  });
  return sourceFile;
}

export default makeHeaderOptional;

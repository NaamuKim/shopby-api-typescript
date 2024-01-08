import { SourceFile, SyntaxKind } from 'ts-morph';

export function sliceEnumDescription(sourceFile: SourceFile) {
  sourceFile.forEachDescendant((node) => {
    // '@enum' 주석이 있는지 확인
    if (node.getKind() === SyntaxKind.PropertySignature) {
      const propertySignature = node;
      const comments = propertySignature.getLeadingCommentRanges();
      const hasEnumComment = comments.some((comment) =>
        comment.getText().includes('@enum')
      );

      if (hasEnumComment) {
        // 문자열 리터럴 타입인 경우 처리
        const text = propertySignature.getType().getText();
        const replacedText = text
          .split('|')
          .map((part) => part.trim().match(/^"([^:]+)"/)?.[1] ?? part.trim())
          .join(' | ');
        //   propertySignature.replaceWithText(`${propertyName}?: ${replacedText}`);
      }
    }
  });
  return sourceFile;
}

import { SourceFile, SyntaxKind } from 'ts-morph';

export const modifyNullableDescriptionToUndefinedType = (
  sourceFile: SourceFile
) => {
  sourceFile.forEachDescendant((node) => {
    if (node.getKind() === SyntaxKind.PropertySignature) {
      const property = node.asKind(SyntaxKind.PropertySignature);
      if (property) {
        if (!property.getLeadingCommentRanges().length) return;
        const comment = property.getLeadingCommentRanges()[0].getText() || '';
        // 주석에 'nullable' 이 포함된 경우에만 처리
        if (!comment.includes('nullable')) {
          property.setHasQuestionToken(false);
        }
      }
    }
  });
  return sourceFile;
};

import { SourceFile, SyntaxKind } from 'ts-morph';

// TODO 콜론 기준 앞 뒤를 나누어 영어인 부분을 리턴해야함
function isKorean(text: string) {
  return /[\uAC00-\uD7AF]/.test(text);
}

function removeSpaces(str: string): string {
  return str.replace(/\s+/g, '');
}
export function sliceUnionWithDescription(sourceFile: SourceFile) {
  sourceFile.forEachDescendant((node) => {
    if (node.getKind() === SyntaxKind.UnionType) {
      const unionTypeNode = node;

      const stringUnionArray = unionTypeNode.getText().split(' | ');
      if (stringUnionArray.length === 1) return;

      const removedDescriptionWithColon = stringUnionArray.map((text) => {
        if (!text.includes(':')) return text;
        const [left, right] = text.split(':');
        // 간혹 왼쪽이 한글인경우가 있음 실제 한글값 enum은 없음
        if (isKorean(left)) {
          if (right) return '"' + removeSpaces(right);
        }
        return left + '"';
      });

      if (removedDescriptionWithColon.length === 1) return;
      unionTypeNode.replaceWithText(removedDescriptionWithColon.join(' | '));
    }
  });
  return sourceFile;
}

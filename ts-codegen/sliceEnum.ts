import { SourceFile, SyntaxKind } from 'ts-morph';

// TODO 콜론 기준 앞 뒤를 나누어 영어인 부분을 리턴해야함
function isEnglish(text: string): boolean {
  return /^[A-Za-z]+$/.test(text);
}
export function sliceEnumDescription(sourceFile: SourceFile) {
  sourceFile.forEachDescendant((node) => {
    // '@enum' 주석이 있는지 확인
    if (node.getKind() === SyntaxKind.UnionType) {
      const unionTypeNode = node;
      console.log(unionTypeNode.getText());

      const stringUnionArray = unionTypeNode.getText().split(' | ');
      if (stringUnionArray.length === 1) return;

      const removedDescriptionWithColon = stringUnionArray.map((text) => {
        if (!text.includes(':')) return text;
        return text.split(':')[0] + '"';
      });

      if (removedDescriptionWithColon.length === 1) return;
      unionTypeNode.replaceWithText(removedDescriptionWithColon.join(' | '));
    }
  });
  return sourceFile;
}

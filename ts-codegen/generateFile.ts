import project from './project';
import { modifyNullableDescriptionToUndefinedType } from './undefinedCheck';
import { sliceUnionWithDescription } from './sliceUnionWithDescription';
import { pipe } from './fn';
import makeHeaderOptional from './makeHeaderOptional';

export const generateFullTypedFile = (filePath: string) => {
  const sourceFile = project.addSourceFileAtPath(filePath);
  return pipe(
    sourceFile,
    // modifyNullableDescriptionToUndefinedType,
    // sliceUnionWithDescription,
    makeHeaderOptional
  );
};

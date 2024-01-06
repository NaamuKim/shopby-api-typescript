import project from './project';
import { modifyNullableDescriptionToUndefinedType } from './undefinedCheck';

export const generateFullTypedFile = (filePath: string) => {
  const sourceFile = project.addSourceFileAtPath(filePath);
  return modifyNullableDescriptionToUndefinedType(sourceFile);
};

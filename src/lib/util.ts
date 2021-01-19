import { PHASE_EXPORT } from 'next/constants';

/**
 * Get the publicUrl.
 * This is used primarily to enable compatibility with the Sitecore Experience Editor.
 */
export const getPublicUrl = (): string => {
  return process.env.PUBLIC_URL || '';
};

export const isExportMode = (): boolean => process.env.BUILD_MODE === PHASE_EXPORT;

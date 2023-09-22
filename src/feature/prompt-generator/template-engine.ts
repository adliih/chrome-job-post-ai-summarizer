const NEW_LINE = "\n";
const SECTION_SEPARATOR = `----------`;

export function generatePrompt(
  jobPost: string,
  keyPoints: string[],
  instructions: string[]
) {
  return [
    `Given these job post`,
    SECTION_SEPARATOR,
    jobPost,
    SECTION_SEPARATOR,
    `And these required keypoints`,
    SECTION_SEPARATOR,
    ...keyPoints,
    SECTION_SEPARATOR,
    `Please do the following`,
    SECTION_SEPARATOR,
    ...instructions,
  ].join(NEW_LINE);
}

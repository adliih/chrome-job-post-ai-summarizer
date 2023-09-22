const NEW_LINE = "\n";
const SECTION_SEPARATOR = `${NEW_LINE}----------${NEW_LINE}`;

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
    `And given these required keypoints`,
    SECTION_SEPARATOR,
    ...keyPoints,
    SECTION_SEPARATOR,
    `Please follow these instructions`,
    ...instructions.map((instruction) => `- ${instruction}`),
  ].join(NEW_LINE);
}

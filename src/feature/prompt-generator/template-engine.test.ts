import { expect, test } from "vitest";
import { generatePrompt } from "./template-engine";

test("generatePrompt", () => {
  const jobPost = "Job Post";
  const keyPoints = ["Point 1", "Point 2"];
  const instructions = ["Please do A", "Please do B"];

  const prompt = generatePrompt(jobPost, keyPoints, instructions);

  expect(prompt).toContain(jobPost);
  expect(prompt).toContain(keyPoints.join("\n"));
  expect(prompt).toContain(instructions.join("\n"));
});

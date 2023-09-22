export interface Settings {
  keyPoints: string[];
  instructions: string[];
}

const defaultSettings: Settings = {
  keyPoints: [
    "Work Location/Arrangement",
    "Company Name",
    "Job Position",
    "URL",
    "About Company",
    "Industry",
    "Ideal Candidate",
    "Culture",
    "Stacks",
    "Personal Growth Possibility (How much can I learn personally / profesionally?)",
    "Division Importance (How important is this division? Is it part of core business?) ",
    "Profitability Risk (Is it already profitable now? Will it have a path for profitable that we can see?)",
  ],
  instructions: [
    "Please break down the job post into mentioned key points",
    "Please use bullet point format for each key points",
    "Please keep each bullet point as short as possible",
    "Please use markdown format for the result",
  ],
};

export async function saveSettings(settings: Settings) {
  await chrome.storage.local.set(settings);
  console.log("Settings saved:", settings);
}

export async function getSettings(): Promise<Settings> {
  const settings = (await chrome.storage.local.get()) as Settings;
  if (settings.instructions && settings.keyPoints) {
    return settings;
  }
  console.log("No settings found, will save default settings");
  await saveSettings(defaultSettings);
  return defaultSettings;
}

export async function resetSettings(): Promise<void> {
  await chrome.storage.local.clear();
}

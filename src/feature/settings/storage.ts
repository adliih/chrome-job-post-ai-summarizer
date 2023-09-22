export interface Settings {
  openAiApiKey?: string;
}

const defaultSettings: Settings = {};

export async function saveSettings(settings: Settings) {
  await chrome.storage.local.set(settings);
  console.log("Settings saved:", settings);
}

export async function getSettings(): Promise<Settings> {
  const settings = await chrome.storage.local.get();
  if (settings) {
    return settings;
  }
  console.log("No settings found, will save default settings");
  await saveSettings(defaultSettings);
  return defaultSettings;
}

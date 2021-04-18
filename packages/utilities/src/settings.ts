import type { JsonObject } from './types'

const SETTINGS_KEY = 'settings'

/**
 * Loads your plugin’s `settings` (stored locally on the user’s computer).
 * Values in `settings` default to an optional `defaultSettings` object.
 *
 * @category Settings
 */
export async function loadSettingsAsync<Settings extends JsonObject>(
  defaultSettings: Settings
): Promise<Settings> {
  const settings: Settings = await figma.clientStorage.getAsync(SETTINGS_KEY)
  if (typeof settings === 'undefined') {
    return defaultSettings
  }
  return Object.assign(defaultSettings, settings)
}

/**
 * Saves the given `settings` for your plugin (stored locally on the user’s
 * computer).
 *
 * @category Settings
 */
export async function saveSettingsAsync<Settings extends JsonObject>(
  settings: Settings
): Promise<void> {
  await figma.clientStorage.setAsync(SETTINGS_KEY, settings)
}

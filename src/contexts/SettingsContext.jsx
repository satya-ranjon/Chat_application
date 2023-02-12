import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { defaultSettings } from "../utils/config";

const initialState = {
  ...defaultSettings,
  onToggleMode: () => {},
};

const SettingsContext = createContext(initialState);
const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
  });

  // Mode
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext };
export default SettingsProvider;

import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const getValue = localStorage.getItem(key);
    return getValue === null ? defaultValue : JSON.parse(getValue);
  });

  // TODO

  // useEffect(() => {
  //   const listener = (e) => {
  //     if (e.storageArea === localStorage && e.key === key) {
  //       setValue(JSON.parse(e.newValue));
  //     }
  //   };
  //   window.addEventListener("storage", listener);

  //   return () => {
  //     window.removeEventListener("storage", listener);
  //   };
  // }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;

      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  };
  return [value, setValueInLocalStorage];
};

export default useLocalStorage;

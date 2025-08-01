import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined" || !window.localStorage) {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.error(error);
      }
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}

export default useLocalStorage;

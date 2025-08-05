import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      // Handle initial localStorage read errors silently
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        // Dispatch a custom event to notify other components
        window.dispatchEvent(new Event('localStorage'));
      }
    } catch {
      // Handle localStorage errors silently
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          const item = window.localStorage.getItem(key);
          const newValue = item ? JSON.parse(item) : initialValue;
          setStoredValue(newValue);
        } catch {
          // Handle JSON parsing errors silently
        }
      }
    };

    // Listen for storage changes from other tabs/windows
    window.addEventListener('storage', handleStorageChange);
    // Listen for our custom localStorage event
    window.addEventListener('localStorage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue] as const;
}

export default useLocalStorage;

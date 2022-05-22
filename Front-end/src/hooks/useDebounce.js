import { useEffect, useState } from "react";

export default function useDebounce(value = "", delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    function () {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );
  return debouncedValue;
}

import { useState } from "react";

export const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilters = (key, val) => {
    setFilters((prev) => ({ ...prev, [key]: val }));
  };

  return { filters, changeFilters };
};

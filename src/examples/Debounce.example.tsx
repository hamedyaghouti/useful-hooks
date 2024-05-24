import { useState, useEffect } from "react";

import { useDebounce } from "../hooks";

export const DebounceHookExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Perform search API call with debouncedSearchTerm
    // ...
  }, [debouncedSearchTerm]);
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

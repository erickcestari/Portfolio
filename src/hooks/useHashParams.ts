import { useEffect, useState } from "react";

export const useHashParams = () => {
  const [currentHash, setCurrentHash] = useState("");
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      setCurrentHash(currentHash);
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { currentHash };
};

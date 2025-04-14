import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPendingHash, clearPendingHash } from "../utils/ScrollManager";
import { scrollToHash } from "../utils/scrollToHash";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const hash = getPendingHash();

    if (hash) {
      // Delay to ensure DOM is fully rendered
      setTimeout(() => {
        scrollToHash(hash);
        clearPendingHash();
      }, 50);
    } else {
      // Default scroll to top if no pending hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}

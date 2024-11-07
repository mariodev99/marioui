import { useEffect, useState } from "react";

export function useMediaQuery(query: string){
  // Establece el estado inicial solo en el cliente
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false; // Valor predeterminado en el servidor
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(query);

    // Actualiza el estado con el valor actual de la media query
    setMatches(media.matches);

    const listener = () => {
      setMatches(media.matches);
    };

    // Agrega el listener al cambio de la media query
    media.addEventListener("change", listener);

    // Cleanup al desmontar el componente
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]); // Solo necesitas "query" como dependencia

  return matches;
}
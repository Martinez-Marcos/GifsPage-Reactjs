import { useState, useEffect } from "react";

export default function useGifs(servicio) {
  const [loading, setLoading] = useState(false);
  const [gifs, setgifs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    servicio()
      .then((gifs) => {
        setgifs(gifs);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true)
      });
  }, []);

  return [loading,gifs,error];
}

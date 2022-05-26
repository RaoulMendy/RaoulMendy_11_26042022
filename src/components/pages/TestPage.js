import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useFetch(url, id) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);

        const data = await response.json();
        const activeLocation = data.filter(function (location) {
          return location.id === id;
        });

        if (activeLocation === undefined) throw new Error("error 404");
        setData(activeLocation);
      } catch (err) {
        setError(true);
        window.location.pathname = "/error";
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, id]);

  return { isLoading, data, error };
}

import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const ShowLoadingIndicator = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    //   //Doesn't work with Strict Mode
    //   .finally(() => {
    //     setLoading(false);
    //   });

    return () => controller.abort();
  }, []);

  return (
    <>
      <h2>Show a Loading Indicator</h2>
      {isLoading ? (
        <div className="spinner-border" role="status"></div>
      ) : (
        <>
          {error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <>
              {users.map((u) => (
                <li key={u.id}>{u.name}</li>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ShowLoadingIndicator;

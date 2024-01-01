import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  /* Fetch with async-await */
  useEffect(() => {
    async function fetchUsers() {
      // try {
      //   const res = await axios.get<User[]>(
      //     "https://jsonplaceholder.typicode.com/uxsers"
      //   );
      //   setUsers(res.data);
      // } catch (err) {
      //   setError((err as AxiosError).message);
      // }
    }

    fetchUsers();
  });

  /*
    Fetch with callbacks

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/uxsers")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  */

  return (
    <>
      <h2>Fetching Data</h2>
      {error && <p className="text-danger">{error}</p>}
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </>
  );
};

export default FetchingData;

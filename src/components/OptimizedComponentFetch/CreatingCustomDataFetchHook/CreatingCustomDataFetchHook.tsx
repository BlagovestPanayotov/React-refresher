import { useEffect, useState } from "react";
import { User, userService } from "../services/user-service";
import { CanceledError } from "axios";
import { useUsers } from "../hooks/useUsers";

const CreatingCustomDataFetchHook = () => {
  const { users, error, isLoading, setUsers, setError, setLoading } =
    useUsers();

  function deleteUser(u: User) {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== u.id));

    userService.delete(u.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  }

  function addUser() {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setLoading(true);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  function updateUser(user: User) {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name.toUpperCase() };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  }

  return (
    <>
      <h2>Optimized Component - Fetch</h2>
      {isLoading ? (
        <div className="spinner-border" role="status"></div>
      ) : (
        <button className="btn btn-primary mb-3" onClick={addUser}>
          Add
        </button>
      )}
      <>
        {error && <p className="text-danger">{error}</p>}
        <ul className="list-group">
          {users.map((u) => (
            <li
              key={u.id}
              className="list-group-item d-flex justify-content-between"
            >
              {u.name}
              <div>
                <button
                  onClick={() => updateUser(u)}
                  className="btn btn-outline-secondary mx-1"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteUser(u)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    </>
  );
};

export default CreatingCustomDataFetchHook;

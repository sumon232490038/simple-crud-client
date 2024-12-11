import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

// import { useContext } from "react";
// import { DataContext } from "./ContextProvider";

const Users = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);

  // const { users } = useContext(DataContext);
  //   console.log(users);
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:3000/usersData/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("delete Succsessfull");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto flex text-center items-center flex-col justify-center space-y-5 mt-20">
      <h1>Data form mongodb site :{users.length}</h1>
      {users.map((user, idx) => (
        <>
          <div
            key={user._id}
            className="flex justify-center items-center gap-5"
          >
            <p>
              {idx}-{user.name}-{user.email}-{user._id}
            </p>
            <Link to={`/usersData/${user._id}`} className="btn">
              Update
            </Link>
            <button className="btn" onClick={() => handleDelete(user._id)}>
              X
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Users;

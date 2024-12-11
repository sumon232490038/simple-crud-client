import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  //   console.log(users);
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>DAta form mongodb site :{users.length}</h1>
      {users.map((user, idx) => (
        <>
          <p key={user._id}>
            {idx}-{user.name}-{user.email}-{user._id}
          </p>{" "}
          <button onClick={() => handleDelete(user._id)}>X</button>
        </>
      ))}
    </div>
  );
};

export default Users;

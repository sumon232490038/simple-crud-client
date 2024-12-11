import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  const handleUpdateData = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };

    fetch(`http://localhost:3000/usersData/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("The User Data is Up to date successfull");
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1>Update Information of {loadedData.name}</h1>

      <form
        onSubmit={handleUpdateData}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          name="name"
          defaultValue={loadedData.name}
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="email"
          name="email"
          defaultValue={loadedData.email}
          className="input input-bordered w-full max-w-xs"
        />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default Update;

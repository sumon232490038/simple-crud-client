import "./App.css";

function App() {
  const handleFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    const newUser = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user is added");
        }
        form.reset();
      });
  };
  return (
    <>
      <h1>Crud is done jjj</h1>
      <form onSubmit={handleFormData}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}

export default App;

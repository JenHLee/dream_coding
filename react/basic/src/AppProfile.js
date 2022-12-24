
import "./App.css";

function AppProfile() {
  const title = "Fruits";
  const fruits = ["Apple", "Banana", "Kiwi"];
  return (
    <>
      <h1> Hello!</h1>
      <p>{title}</p>
      {fruits.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
}

export default AppProfile;

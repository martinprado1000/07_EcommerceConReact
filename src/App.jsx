import "./App.css";
import NavBar from "./components/navBar/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer value="Component ItemListContainer"/>
    </>
  );
}

export default App;

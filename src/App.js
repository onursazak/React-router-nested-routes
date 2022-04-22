import "./App.css";
import Router from "./routes";

function App() {
  return (
    <div>
      <div>Some static content that doesn't change on navigation.</div>;
      <Router />
    </div>
  );
}

export default App;

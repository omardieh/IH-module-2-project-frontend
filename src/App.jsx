import { Routes, Route } from "react-router-dom";
import bcryptjs from "bcryptjs";

function App() {
  const handlePassword = async () => {
    const hashed = await bcryptjs.hash("abc", 10);
    console.log(hashed);
  };
  handlePassword();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Homepage</div>} />
      </Routes>
    </div>
  );
}

export default App;

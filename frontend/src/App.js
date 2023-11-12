import { Routes, Route } from "react-router-dom";
import Users from "./pages/users";
import Products from "./pages/products";
import Home from "./pages/home";
import "./app.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/users" element={<Users />} />
				<Route path="/products" element={<Products />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

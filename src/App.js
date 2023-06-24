import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import PostDetails from './components/post/PostDetails';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/post/:id" element={<PostDetails />} />
		</Routes>
	);
}

export default App;

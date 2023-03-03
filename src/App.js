import Blog from "./blog/Blog";
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom"
import Header from "./blog/Header";
import Container from '@mui/material/Container';

const sections = [
  { title: 'Technology', url: '/technology' },
  { title: 'Design', url: '/design' },
  { title: 'Culture', url: '/culture' },
  { title: 'Business', url: '/business' },
  { title: 'Politics', url: '/politics' },
  { title: 'Opinion', url: '/opinion' },
  { title: 'Science', url: '/science' },
  { title: 'Health', url: '/health' },
  { title: 'Style', url: '/style' },
  { title: 'Travel', url: '/travel' },
];

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
      <Header title="Blog" sections={sections}/>
      </Container>
       <Routes>
        <Route path="/" element={<Blog/>}/>
        <Route path="/technology" element={<h1>Technology</h1>}/>
        <Route path="/design" element={<h1>Design</h1>}/>
        <Route path="/culture" element={<h1>Culture</h1>}/>
        <Route path="/business" element={<h1>Business</h1>}/>
        <Route path="/politics" element={<h1>Politics</h1>}/>
        <Route path="/opinion" element={<h1>Opinion</h1>}/>
        <Route path="/science" element={<h1>Science</h1>}/>
        <Route path="/health" element={<h1>Health</h1>}/>
        <Route path="/style" element={<h1>Style</h1>}/>
        <Route path="/travel" element={<h1>Travel</h1>}/>
      </Routes>
      </div>
  );
}

export default App;

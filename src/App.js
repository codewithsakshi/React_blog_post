
import Blog from "./component/blog/Blog"
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom"
import Header from "./component/blog/Header";
import Container from '@mui/material/Container';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Design', url: '/design' },
  { title: 'Culture', url: '/culture' },
  { title: 'Business', url: '/bussiness' },
  { title: 'Politics', url: '/politics' },
  { title: 'Technology', url: '/technology' },
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
        {/* <Route path="/technology"/>
        <Route path="/design"/>
        <Route path="/culture"/>
        <Route path="/business"/>
        <Route path="/politics"/>
        <Route path="/opinion"/>
        <Route path="/science"/>
        <Route path="/health"/>
        <Route path="/style"/>
        <Route path="/travel"/> */}
      </Routes>
      </div>
  );
}

export default App;

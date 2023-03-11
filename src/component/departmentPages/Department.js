import DisplayBlog from "./DisplayBlog"
import Container from "@mui/material/Container"

export default function Department(props) {
    const blogs = props.blogs.content;

    const cards = blogs.map((item = {}) => (
      <DisplayBlog
        blog={item}
      />
    ));
    
    return (
        <Container>{cards}</Container>
      );
  }
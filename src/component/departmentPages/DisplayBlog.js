import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export default function DisplayBlog(props) {
  const [localStorage, setLocalStorage] = React.useState(props.blog);  
  const { title, content, author, publication_date, comments, image } = props.blog;
  
  const displayContent = content.map((desc = "") => (
    <Typography my={2} component="p" variant="p" color="text.secondary" className="blog_content" gutterBottom>
    {desc}
  </Typography>
  )) 

//   const setLocalStorage_item = () => {
//    localStorage.setItem("blog", JSON.stringify(props.blog))
//   };

  const getLocalStorage = () => {
    try {
        const blogs = localStorage.getItem("blog");
        if(blogs){
            return blogs
        }
    } catch (error) {
        console.log("error");
    }
  }

//   React.useEffect(() => {
//   return (() => {
//     try {
//         localStorage.setItem("blog", JSON.stringify(props.blog))
//     } catch (error) {
//        console.log("error") 
//     }
//   })
//   }, [])

  return (
    <Container className="blogs_box">
      <Typography component="h4" variant="h5" color="inherit" sx={{ "bgcolor": "#B6E2A1" }} align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" color="inherit">
        <em>{publication_date} by {author}</em>
      </Typography>
        {displayContent}
      </Container>
  );
}

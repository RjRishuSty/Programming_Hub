import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { flexCenter } from "../styles/customStyles";
import BlogInputs from "../components/BlogInputs";
import TableComponent from "../components/TableComponent";

const BlogsPage = () => {
  const location = useLocation();

  const subPath = location.pathname.replace("/blogs", "") || "/";

  const showComponent = () => {
    switch (subPath) {
      case "/all-blogs":
        return (
          <Container sx={{ ...flexCenter, flexDirection: "column" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Explore Blogs
            </Typography>
            <Typography variant="body1">
              Discover insights, ideas, and stories shared by our community of
              bloggers.
            </Typography>
            <TableComponent />
          </Container>
        );

      case "/create-blog":
        return (
          <Container sx={{ ...flexCenter, flexDirection: "column" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Create New Blog
            </Typography>
            <Typography variant="body1">
              Enter the details to create and share a new blog.
            </Typography>
            <BlogInputs />
          </Container>
        );

      case "/update-blog/:id":
        return (
          <Container sx={{ ...flexCenter, flexDirection: "column" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Update Blog
            </Typography>
            <Typography variant="body1">
              Make changes to your blog content and keep your post up to date.
            </Typography>
            <BlogInputs />
          </Container>
        );

      default:
        <Typography>Not Found</Typography>;
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        maxHeight: "85vh",
        mt: -5,
        py: 5,
        overflowY: "auto",
      }}
    >
      {showComponent()}
    </Stack>
  );
};

export default BlogsPage;

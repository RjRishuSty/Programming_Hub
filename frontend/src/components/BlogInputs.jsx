import React, { useRef, useState } from "react";
import { blogInputFields } from "../lib/blogInputFields";
import {
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Box,
  Avatar,
  Button,
} from "@mui/material";
import TextEditor from "./TextEditor";
import { enqueueSnackbar } from "notistack";
import { flexCenter } from "../styles/customStyles";

const BlogInputs = () => {
  const [formData, setFormData] = useState({
    blogTitle: "",
    authorName: "",
    description: "",
  });
  const fileInputRef = useRef();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleInputValidate = () => {
    if (!formData.blogTitle) {
      enqueueSnackbar("Blog title field is required", { variant: "error" });
      return false;
    }
    if (!formData.authorName) {
      enqueueSnackbar("Author name field is required", { variant: "error" });
      return false;
    }
    if (!formData.description) {
      enqueueSnackbar("Blog description field is required", {
        variant: "error",
      });
      return false;
    }
    return true;
  };

  const handleSubmitBlog = (e) => {
    e.preventDefault();
    if (!handleInputValidate()) return;
    enqueueSnackbar("Blog created successfully", { variant: "success" });
  };

  console.log("FormData", formData);
  return (
    <Grid
      component="form"
      onSubmit={handleSubmitBlog}
      container
      rowSpacing={2}
      columnSpacing={3}
      sx={{ width: "100%", mt: 3 }}
    >
      {blogInputFields.map((item) => (
        <Grid
          size={{
            xs: 12,
            sm: 12,
            md: item.type === "textarea" ? 8 : item.type === "file" ? 4 : 6,
          }}
          key={item.key}
        >
          {item.type === "textarea" ? (
            <Box sx={{mt:2}}>
              <TextEditor
                item={item}
                value={formData.description}
                onChange={(val) =>
                  setFormData((prev) => ({ ...prev, description: val }))
                }
              />
            </Box>
          ) : item.type === "file" ? (
            <Box sx={{mt:2}}>
              <input
                type={item.type}
                id={item.id}
                ref={fileInputRef}
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleInputChange}
              />
              <Typography variant="body2" sx={{ color: "text.default" }}>
                {item.label} *
              </Typography>
              <Box
                onClick={() => fileInputRef.current?.click()}
                sx={{
                  border: "2px dashed #aaa",
                  borderRadius: "8px",
                  height: "340px",
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  textAlign: "center",
                  p: 2,
                  backgroundColor: "background.default",
                  "&:hover": {
                    backgroundColor: "highlight.isActive",
                  },
                }}
              >
                <Typography variant="body1" color="text.default">
                  Click to upload your thumbnail image
                </Typography>
              </Box>
            </Box>
          ) : (
            <TextField
              fullWidth
              id={item.id}
              label={item.label}
              value={formData.id}
              type={item.type}
              placeholder={item.placeholder}
              onChange={handleInputChange}
            />
          )}
        </Grid>
      ))}
      <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{mt:3,...flexCenter}}>
        <Button variant="contained" type="submit" size="large" sx={{width:'50%'}}>
          Create New Blog
        </Button>
      </Grid>
    </Grid>
  );
};

export default BlogInputs;

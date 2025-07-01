import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";

export const blogInputFields = [
  
  {
    id: "blogTitle",
    key: "blogTitle",
    label: "Blog Title",
    type: "text",
    placeholder: "Enter blog title",
    required: true,
  },
  {
    id: "authorName",
    key: "authorName",
    label: "Blog Author Name",
    type: "text",
    placeholder: "Enter author name",
    required: true,
  },

  {
    id: "thumbnailImg ",
    key: "thumbnailImg",
    label: "Thumbnail Image",
    type: "file",
    accept: "image/*",
    required: true,
  },
  {
    id: "description",
    key: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Write a brief description",
    required: true,
    
  },
  
  
];

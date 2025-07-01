import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { Typography, Box } from "@mui/material";

const TextEditor = ({ item,value,onChange }) => {
  const editor = useRef(null);

  const config = {
    placeholder: item.placeholder || "Start writing...",
    height: 340,
    style: {
    color: "#000",
  },
  };
  return (
    <Box sx={{borderRadius: 1, p: 1,mt:-1.5 }}>
      <Typography variant="body2" sx={{ mb: 1,color:'text.default' }}>
        {item.label} *
      </Typography>
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={onChange} 
        onChange={() => {}}
      />
    </Box>
  );
};

export default TextEditor;

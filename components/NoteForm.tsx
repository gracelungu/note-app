import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

interface NoteFormProps {
  title: string;
  content: string;
  editing: boolean;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
  onSubmit: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({
  title,
  content,
  editing,
  onTitleChange,
  onContentChange,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Box mt={4} mb={2}>
      <Typography variant="h4" component="h1" gutterBottom>
        {editing ? "Edit Note" : "Create Note"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Content"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Box mt={2} mb={4}>
          <Button type="submit" variant="contained" color="primary">
            {editing ? "Update" : "Create"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NoteForm;

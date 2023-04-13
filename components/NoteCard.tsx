import React from "react";
import { Card, CardHeader, CardContent, CardActions, Button } from "@mui/material";

interface NoteCardProps {
  title: string;
  content: string;
  onEdit: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, content, onEdit }) => {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>{content}</CardContent>
      <CardActions>
        <Button onClick={onEdit}>Edit</Button>
      </CardActions>
    </Card>
  );
};

export default NoteCard;

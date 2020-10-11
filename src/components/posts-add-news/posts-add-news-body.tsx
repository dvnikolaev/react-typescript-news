import { TextField, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../../store/actions/posts/posts";

const AddNewsBody: React.FC<{
  setIsOpen(value: boolean): void;
  addPost(author_id: number, title: string, description: string): void;
  userId: number;
}> = ({ setIsOpen, addPost, userId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const buttonIsDisable = !title || !description;

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addPost(userId, title, description);
    setIsOpen(false);
  };

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        Добавление записи
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Заголовок"
          variant="outlined"
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Описание"
          variant="outlined"
          size="small"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          onClick={onSubmitHandler}
          disabled={buttonIsDisable}
        >
          Добавить
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={() => setIsOpen(false)}
        >
          Отмена
        </Button>
      </form>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userId: state.auth.user.id,
  };
};

export default connect(mapStateToProps, { addPost })(AddNewsBody);

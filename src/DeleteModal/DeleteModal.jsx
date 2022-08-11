import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const DeleteModal = ({ open, onClose, refresh, id }) => {
  const [isLoading, setIsLoading] = useState(false);

  const cancelhandler = () => {
    onClose();
  };

  const deletehandler = () => {
    setIsLoading(true);
    fetch(`https://tranquil-shore-95667.herokuapp.com/items/delete`, {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => {})
      .finally(() => {
        onClose();
        refresh();
        setIsLoading(false);
      });
  };
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            backgroundColor: "background.paper",
            border: "none",
            outline: "none",
            p: 4,
          }}
        >
          

          <Box mb="1rem">
            <Typography fontSize="1.5rem">
              Do You Really Want To Delete?
            </Typography>
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              type="submit"
              name="submit"
              variant="contained"
              size="large"
              sx={{ msScrollSnapX: "1rem" }}
              fullWidth
              onClick={cancelhandler}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              name="submit"
              variant="contained"
              size="large"
              sx={{ mx: "1rem" }}
              fullWidth
              onClick={deletehandler}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteModal;

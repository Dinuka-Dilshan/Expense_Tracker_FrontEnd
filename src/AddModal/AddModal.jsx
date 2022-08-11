import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AddModal = ({ open, onClose,refresh }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState();

  const formik = useFormik({
    initialValues: {
      title: "",
      amount: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      amount: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      fetch(`https://tranquil-shore-95667.herokuapp.com/items/add`, {
        method: "POST",
        body: JSON.stringify({
          title: values.title,
          amount: values.amount,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setIsMessage(true);
            setMessage(data.error);
          } else {
            setIsMessage(true);
            setMessage(data.message);
          }
        })
        .catch((err) => {
          setIsMessage(true);
          setMessage(err.message);
        })
        .finally(() => {
          setIsLoading(false);
          onClose();
          refresh();
        });
    },
  });

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
          
          <form onSubmit={formik.handleSubmit} onBlur={formik.handleBlur}>
            <TextField
              fullWidth
              label="Title"
              sx={{ my: "1rem" }}
              value={formik.values.title}
              onChange={formik.handleChange}
              name="title"
              onBlur={formik.handleBlur}
            />
            {formik.touched.title && formik.errors.title ? (
              <Box sx={{ color: "red" }}>{formik.errors.title}</Box>
            ) : null}
            <TextField
              type="number"
              fullWidth
              label="Price"
              value={formik.values.amount}
              onChange={formik.handleChange}
              name="amount"
              onBlur={formik.handleBlur}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <Box sx={{ color: "red" }}>{formik.errors.amount}</Box>
            ) : null}
            <Button
              type="submit"
              name="submit"
              variant="contained"
              size="large"
              sx={{ my: "1rem" }}
              fullWidth
            >
              Add
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddModal;

import Box from "@mui/material/Box";
import { useState } from "react";

import DeleteModal from "../DeleteModal/DeleteModal";

const Item = ({ title, price, date ,id, refresh}) => {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const doubleClickHandler = (e) => {
    if (e.detail === 2) {
      setIsDeleteModalOpen(true)
    }
  };

  return (
    <Box
      width="100%"
      height="10vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px="0.5rem"
      my="0.3rem"
      boxSizing="border-box"
      border="1px solid #E0E0E0"
      sx={{ borderRadius: "0.8rem", backgroundColor: "white" }}
      onClick={doubleClickHandler}
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
      >
        <Box fontSize="0.6rem">{date}</Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        fontSize="1.2rem"
      >
        <Box>{title}</Box>
        <Box>Rs.{price}</Box>
      </Box>
      <DeleteModal
        open={isDeleteModalOpen}
        id={id}
        onClose={() => {
          setIsDeleteModalOpen(false);
        }}
        refresh={refresh}
        
      />
    </Box>
  );
};

export default Item;

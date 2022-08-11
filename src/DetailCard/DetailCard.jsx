import Box from "@mui/material/Box";

const DetailCard = ({title,amount}) => {
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
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
      >
        <Box fontSize="0.9rem">{title}</Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        fontSize="1.5rem"
      >
        <Box>RS.{amount}</Box>
      </Box>
    </Box>
  );
};

export default DetailCard;

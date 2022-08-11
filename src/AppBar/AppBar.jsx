import Box from "@mui/material/Box";

const AppBar = () => {
  return (
    <Box
      width="100%"
      height="5vh"
      sx={{ backgroundColor: "primary.main" }}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      px="0.8rem"
      py="2rem"
      boxSizing="border-box"
      fontSize="1.3rem"
      color="white"
    >
      Expence Tracker
    </Box>
  );
};
export default AppBar;

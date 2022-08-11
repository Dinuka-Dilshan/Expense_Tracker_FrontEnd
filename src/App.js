import AppBar from "./AppBar/AppBar";
import "./App.css";
import Item from "./Item/Item";
import { Box, Grid } from "@mui/material";
import FloatingButton from "./FloatingButton/FloatingButton";
import { useEffect, useState } from "react";
import AddModal from "./AddModal/AddModal";
import DetailCard from "./DetailCard/DetailCard";
import OrderButton from "./OrderButton/OrderButton";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const [data, setData] = useState({
    items: [],
    total: 0,
    today: 0,
  });

  const [isAccending, setIsAccending] = useState(false);

  useEffect(() => {
    fetch(`https://tranquil-shore-95667.herokuapp.com/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setData({ items: data.items, total: data.total, today: data.today });
        }
      })
      .catch((err) => {});
  }, [refresh]);


  useEffect(()=>{
    const reversedData = data.items.reverse();
    setData(data=>({
      ...data,
      items:reversedData
    }))
  },[isAccending])

  return (
    <Box>
      <FloatingButton
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
      <OrderButton
        order={isAccending}
        setOrder={() => {
          setIsAccending((p) => !p);
        }}
      />
      <AddModal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        refresh={() => setRefresh((p) => !p)}
      />

      <AppBar />
      <Grid
        container
        px="0.4rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={5.9}>
          <DetailCard title="Today Expence" amount={data.today} />
        </Grid>
        <Grid item xs={5.9}>
          <DetailCard title="Total Expence" amount={data.total} />
        </Grid>
      </Grid>
      <Box
        px="0.4rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {data.items?.map((item, index) => {
          return (
            <Item
              key={index}
              title={item.title}
              date={item.date}
              price={item.amount}
              id={item._id}
              refresh={() => setRefresh((p) => !p)}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default App;

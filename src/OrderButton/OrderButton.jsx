import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import "./FloatingButton.css";
const OrderButton = ({ onClick ,order,setOrder}) => {
  const clickHandler = () => {
    onClick && onClick();
    setOrder && setOrder();
  };

  return (
    <div
      className="floating-btn shadow"
      onClick={clickHandler}
      style={{
        position: "fixed",
        bottom: "10%",
        right: "3%",
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "3.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {order? <ArrowUpwardIcon color='white'/> : <ArrowDownwardIcon color='white'/>}
    </div>
  );
};

export default OrderButton;

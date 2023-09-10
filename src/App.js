import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./fetaures/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const { cartItem } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]);
  return (
    <main>
      <Navbar />
      <CartContainer />

    </main>
  );
}
export default App;

 
import { useSelector, useDispatch  } from "react-redux";
import { increment, reset, getClicks } from "./redux/clicksSlice";

export const App = () => {
  const dispatch = useDispatch()
  const x = useSelector(getClicks)
  console.log(increment(5))
  return (
   <>
   <button onClick={() => dispatch(increment(5))}>{x}</button> 
   <button onClick={() => dispatch(reset())}>Reset</button> 
   </>
  );
};

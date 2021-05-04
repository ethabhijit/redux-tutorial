import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../actions";

const Example = () => {
	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
	const dispatch = useDispatch();

	return (
		<>
      <h1>Counter {counter}</h1>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			{isLogged ? (<h3>Valueable info not be seen</h3>) : ""}
		</>
	);
};

export default Example;
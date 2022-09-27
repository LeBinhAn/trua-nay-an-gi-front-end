import { useAppSelector, useAppDispatch } from "../app/hooks";
import { increment } from "../features/counter/counterSlice";

const AccountInfo = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const add = () => {
    dispatch(increment());
  };

  return (
    <>
      <button onClick={() => add()}>Add</button>
      <div>AccountInfo {count}</div>
    </>
  )
}

export default AccountInfo
import { useLoaderData } from "react-router-dom";
import AccountInfo from "../../components/accountInfo";

const Sample = () => {
  const loaderData = useLoaderData();

  console.log(loaderData);

  return (
    <div>
      <AccountInfo />
    </div>
  )
}

export default Sample
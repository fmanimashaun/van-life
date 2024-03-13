import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  const { userName } = useLoaderData();
  return (
    <div className="container">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;

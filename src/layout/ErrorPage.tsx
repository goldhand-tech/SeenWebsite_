import { NavBar } from "../components/NavBar";

export const ErrorPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      <div className="errorDiv">
        <h1>Sorry, Something went wrong...</h1>
      </div>
    </div>
  );
};

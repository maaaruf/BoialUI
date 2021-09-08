import NavBar from "../navbar/navbar";
import classes from "./layout.css";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className={classes.main}>
        <div style={{ width: "80%" }, { margin: "4rem auto" }}>
          {children}
        </div>
      </main>
    </>
  );
}

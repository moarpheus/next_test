import Link from "next/link";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}

export default HomePage;
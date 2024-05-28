import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h2>
        Ups!
        <br />
        Page not found
      </h2>
      <Link href="/home">Go back to Home</Link>
    </div>
  );
}

export default NotFound;

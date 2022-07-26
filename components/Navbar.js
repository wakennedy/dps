import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">HOME</button>
          </Link>
          <Link href="/db/view">
            <button className="btn-logo">VIEW</button>
          </Link>
          <Link href="/db/data">
            <button className="btn-logo">DATA</button>
          </Link>
          <Link href="/form">
            <button className="btn-logo">FORM</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

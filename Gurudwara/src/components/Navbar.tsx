import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" flex absolute z-[20] gap-96 justify-between text-white text-lg font-sans content-center px-20 m-5">
      <Link to="/">Gurudwara</Link>
      <ul className="flex flex-row gap-20 p-0 m-0 ">
        <li className="transition ease-in-out delay-150 hover:text-yellow-400 hover:translate-y-2 hover:scale-125 duration-150">
          <Link to="/">Home</Link>
        </li>
        <li className="transition ease-in-out delay-150 hover:text-yellow-400 hover:translate-y-2 hover:scale-125 duration-150">
          <Link to="/about">About us</Link>
        </li>
        <li className="transition ease-in-out delay-150 hover:text-yellow-400 hover:translate-y-2 hover:scale-125 duration-150">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="transition ease-in-out delay-150 hover:text-yellow-400 hover:translate-y-2 hover:scale-125 duration-150">
          <Link to="/events">Upcoming Events</Link>
        </li>
        <li className="transition ease-in-out delay-150 hover:text-yellow-400 hover:translate-y-2 hover:scale-125 duration-150">
          <Link to="/donation">Donation</Link>
        </li>
      </ul>
    </nav>
  );
}

import React from "react";
import ThemeToggle from "./theme/toggle";
import { LuInfo, LuMenu } from "react-icons/lu";

export default function header() {
  const titlePrefix = "sorting";

  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-circle btn-ghost text-xl">
            <LuMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <h1 className="btn btn-ghost text-xl normal-case" tabIndex={0}>
            <span className="text-accent-focus">{titlePrefix}</span>
            visualizer
          </h1>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>Pathfinding</li>
            <li>Searching</li>
            <li>Sorting</li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-circle btn-ghost text-xl">
          <LuInfo />
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}

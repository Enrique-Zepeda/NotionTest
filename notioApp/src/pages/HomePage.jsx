import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <NavLink to="/about">
        <Button className="bg-red-800 hover:bg-slate-950" variant="contained">
          Contained
        </Button>
      </NavLink>
    </>
  );
}

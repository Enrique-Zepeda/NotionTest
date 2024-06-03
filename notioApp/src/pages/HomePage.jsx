import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <NavLink to="/about">
        <Button variant="contained">Contained</Button>
      </NavLink>
    </>
  );
}

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export function AboutMePage() {
  return (
    <>
      <h1>AboutMe</h1>
      <NavLink to="/">
        <Button className="bg-slate-950" variant="contained">
          Contained
        </Button>
      </NavLink>
    </>
  );
}

import { Grid } from "gridjs-react";

export default function TeamVarsityRoster() {
  return (
    <div className="VarRoster">
      <Grid
        data={[["13", "Matt", "C", "6ft 3in", "2203"]]}
        columns={["Number", "Name", "Position", "Height", "Grad Year"]}
      />
    </div>
  );
}

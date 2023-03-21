import React from "react";

function Teams({ team }) {
  const teamInfo = {
    Varsity: {
      coach: "John Smith",
      record: "15-3",
      description:
        "The Varsity team consists of experienced and talented players competing at a high level.",
    },
    "Junior Varsity I": {
      coach: "Jane Doe",
      record: "10-5",
      description:
        "Junior Varsity I is for intermediate players looking to improve their skills and compete in a challenging environment.",
    },
    "Junior Varsity II": {
      coach: "Mike Johnson",
      record: "7-8",
      description:
        "Junior Varsity II focuses on developing fundamental skills and teamwork for new and less experienced players.",
    },
  };

  const selectedTeamInfo = team ? teamInfo[team] : null;

  return (
    <div>
      {selectedTeamInfo ? (
        <>
          <h1>{team} Team Information</h1>
          <p>
            <strong>Coach:</strong> {selectedTeamInfo.coach}
          </p>
          <p>
            <strong>Record:</strong> {selectedTeamInfo.record}
          </p>
          <p>{selectedTeamInfo.description}</p>
        </>
      ) : (
        <h1>Teams</h1>
      )}
    </div>
  );
}

export default Teams;

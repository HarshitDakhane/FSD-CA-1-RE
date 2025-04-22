import React from "react";
import TeamMemberCard from "./components/TeamMemberCard";

function App(){
  return(
    <div>
      <h1>My Team</h1>
      <TeamMemberCard name="John" title="Software Engineer"/>
      <TeamMemberCard name="Emily" title="UI Designer"/>
    </div>
  )
}
export default App;
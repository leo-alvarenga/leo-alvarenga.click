import { useMemo } from "react";
import {
  Page,
  Profile,
  SkillList,
  ProjectList,
  ContactList,
  ContentItemInfo,
} from "../../components";

function Home() {
  return (
    <Page> 
      <>
        <Profile />
        <SkillList />
        <ContactList />
        <ProjectList />
      </>
    </Page>
  );
}

export default Home;

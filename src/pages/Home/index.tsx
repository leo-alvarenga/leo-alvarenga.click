import { useMemo } from "react";
import {
  Page,
  Profile,
  SkillList,
  ProjectList,
  ContactList,
} from "../../components";

const personalSiteNotification = {
  title: 'page.home.notification.title',
  icon: 'fa-solid fa-lightbulb',
  redirect: {
    to: 'https://darkness-within.click',
    label: 'page.home.notification.label',
  }
}

function Home() {
  return (
    <Page notifications={[personalSiteNotification]}> 
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

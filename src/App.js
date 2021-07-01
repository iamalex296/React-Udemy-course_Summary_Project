import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetup />
        </Route>

        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;

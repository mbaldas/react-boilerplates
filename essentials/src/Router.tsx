import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EntryPage from "./pages/EntryPage/EntryPage";
import PaginationDemo from "./pages/Pagination/PaginationDemo";

export default function ReactRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <EntryPage />
          </Route>
          <Route exact path="/pagination">
            <PaginationDemo />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

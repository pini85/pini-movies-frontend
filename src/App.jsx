import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { setUser } from "./redux/slices/user.slice.ts";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ScrollIntoView from "./components/ScrollIntoView.component";
import RouteConfig from "./routes/RouteConfig";
import { currentUser } from "apis/constants";

const App = () => {
  const [authToken, setToken] = useState(localStorage.getItem("authToken"));

  const theme = useSelector((state) => state.ui.theme);
  const userId = useSelector((state) => state.user?.user?._id);
  const dispatch = useDispatch();
  const { data: user } = useQuery("currentUser", currentUser, {
    retryOnMount: false,
    enabled: !!authToken,
  });

  useEffect(() => {
    if (!user) return;
    if (!user?.email) {
      return google.accounts.id.prompt();
    }
    dispatch(setUser(user));
  }, [user]);

  useEffect(() => {
    window.document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", "#201021");
  }, [theme]);
  useEffect(() => {}, []);

  return (
    <div id="app" className={theme}>
      <Router>
        <ScrollIntoView>
          <RouteConfig />
        </ScrollIntoView>
      </Router>
    </div>
  );
};

export default App;

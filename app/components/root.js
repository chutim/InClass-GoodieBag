import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// BrowserRouter - you can use this beucase of app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// }); // Send index.html for any other requests
//which is located in server/index.js
import Home from "./Home";
import AllCandies from "./AllCandies";
import SingleCandy from "./SingleCandy";

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Goodie Bag
          <Link to="/candies">candies</Link>
          <Link to="/">home</Link>
        </nav>

        <Switch>
          <Route path="/candies/:id" component={SingleCandy} />
          <Route path="/candies" component={AllCandies} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;

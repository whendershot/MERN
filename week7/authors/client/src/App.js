import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavigatorBar from "./components/util/NavigatorBar";
import AuthorCreateView from "./components/AuthorCreate.view";
import AuthorEditView from "./components/AuthorEdit.view";
import AuthorListView from "./components/AuthorList.view";

function App() {
  return (
    <>
      <nav>
        <NavigatorBar />
      </nav>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<AuthorCreateView />} path="/authors/new" />
            <Route element={<AuthorEditView />} path="/authors/:id" />
            <Route element={<AuthorListView />} path="/authors" />
            <Route element={<AuthorListView />} path="/" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

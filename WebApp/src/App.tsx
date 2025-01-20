import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/index.tsx";
import * as routes from "./lib/routes";

import { TrpcProvider } from "./lib/trcp.tsx";
import { AllIdeasPage } from "./pages/AllIdeasPage/index.tsx";
import { NewIdeaPage } from "./pages/NewIdeaPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage/index.tsx";
import "./styles/global.scss";

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path={routes.getAllIdeasRoute()}
              element={<AllIdeasPage />}
            />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />} />
            <Route
              path={routes.getViewIdeaRoute(routes.viewIdeaRouteParams)}
              element={<ViewIdeaPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/index.tsx";
import {
  getAllIdeasRoute,
  getViewIdeaRoute,
  viewIdeaRouteParams,
} from "./lib/routes";
import { TrpcProvider } from "./lib/trcp.tsx";
import { AllIdeasPage } from "./pages/AllIdeasPage/index.tsx";
import { ViewIdeaPage } from "./pages/ViewIdeaPage/index.tsx";

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
            <Route
              path={getViewIdeaRoute(viewIdeaRouteParams)}
              element={<ViewIdeaPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};

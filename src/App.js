import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import ProjectsLayout from "./layouts/ProjectsLayout";

//pages
import Home from "./pages/home/Home";
import Faq from "./pages/help/Faq"
import Contact, { contactAction } from "./pages/help/Contact"
import Projects, { projectsLoader } from "./pages/projects/Projects";
import ProjectDetails, { projectDetailsLoader } from "./pages/projects/ProjectDetails";
import ProjectsError from "./pages/projects/ProjectsError";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >

      <Route index element={<Home />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="projects" element={<ProjectsLayout />} errorElement={<ProjectsError />}>
        <Route
          index
          element={<Projects />}
          loader={projectsLoader}
        />
        <Route
          path=":id"
          element={<ProjectDetails />}
          loader={projectDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalProvider from "./Context/ModalContext";
import PlaygroundProvider from "./Context/PlaygroundContext";
import routes from "./Pages/Routes"; // array of objects
const Loader = () => {
  <div>Loading...</div>;
};
function App() {
  return (
    // Suspence from react
    <Suspense fallback={Loader()}>
      <PlaygroundProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <>
                {routes.map((route) => (
                  <Route path={route.path} element={route.component} />
                ))}
              </>
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </PlaygroundProvider>
    </Suspense>
  );
}

export default App;

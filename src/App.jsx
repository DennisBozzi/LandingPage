import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/layout";
import HomePage from "./screens/home";
import Solucoes from "./screens/solucoes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/Servicos",
      element: <Layout>Servicos</Layout>,
    },
    {
      path: "/Portfolio",
      element: <Layout>Trabalhos</Layout>,
    },
    {
      path: "/estacaoTotal",
      element: (
        <Layout>
          <Solucoes />
        </Layout>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

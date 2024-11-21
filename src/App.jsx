import HomePage from "./screens/home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/Layout"

function App() {
  const router = createBrowserRouter([
    {
      path: "/*", element: (<Layout><HomePage /></Layout>)
    },
    {
      path: "/Servicos", element: (<Layout>Servicos</Layout>)
    },
    {
      path: "/Portfolio", element: (<Layout>Trabalhos</Layout>)
    },
  ]);

  return (
    <div>
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App

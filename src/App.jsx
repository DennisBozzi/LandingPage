import { MenuBar } from "./components/menu-bar"
import HomePage from "./screens/home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/*", element: (<><MenuBar /><HomePage /></>)
    },
    {
      path: "/Servicos", element: (<><MenuBar />Servicos</>)
    },
    {
      path: "/Portfolio", element: (<><MenuBar />Trabalhos</>)
    },
  ]);

  return (
    <div style={{ height: '3000px' }}>
      <RouterProvider
        router={router}
      />
    </div>

  )
}

export default App

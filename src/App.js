
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Body from './Components/Body';
function App() {

  const configPath=createBrowserRouter([
{
  path:"/",
  element:<Body/>
}
  ])




  return (
    
      <RouterProvider router={configPath}>

      </RouterProvider>
    
  );
}

export default App;

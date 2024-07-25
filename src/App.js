
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Body from './Components/Body';
import appStore from './utils/mainSlice';
import {Provider} from "react-redux"
function App() {

  const configPath=createBrowserRouter([
{
  path:"/",
  element:<Body/>
}
  ])




  return (
     <Provider store={appStore}>
      <RouterProvider router={configPath}>
    

     
      </RouterProvider>
    </Provider>
  );
}

export default App;

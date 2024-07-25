
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Body from './Components/Body';
import appStore from './utils/mainSlice';
import {Provider} from "react-redux"
import CardDetail from './Components/CardDetail';
function App() {

  const configPath=createBrowserRouter([
{
  path:"/",
  element:<Body/>
},{
  path:"/detail/:id",
  element:<CardDetail/>
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

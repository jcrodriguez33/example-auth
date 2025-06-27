import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormLogin, Home, PageOne, PageTwo, FormUser, NoMatch } from './pages'
import PublicRoute from './hooks/PublicRoute'
import PrivateRoute from './hooks/PrivateRoute'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PublicRoute component={FormLogin}></PublicRoute>} />
        <Route path="/registro" exact element={<PublicRoute component={FormUser}></PublicRoute>} />
        <Route path="/home" exact element={<PrivateRoute component={Home}></PrivateRoute>} />
        <Route path="/page-1" exact element={<PrivateRoute component={PageOne}></PrivateRoute>} />
        <Route path="/page-2" exact element={<PrivateRoute component={PageTwo}></PrivateRoute>} />
        <Route path="*" exact element={<PrivateRoute component={NoMatch}></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

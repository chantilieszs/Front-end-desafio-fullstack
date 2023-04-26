import { UserProvider } from './context/userContext';
import AppRoutes from './routes';
import { GlobalStyle } from './style/globalStyle';


function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <AppRoutes /> 
    </UserProvider>
  );
}

export default App;
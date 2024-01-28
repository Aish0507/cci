import Header from '@/components/header/Header';
import UserContextProvider from '@/contexts/UserContextProvider';
import Router from '@/Router';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Router />
      </UserContextProvider>
    </div>
  );
}

export default App;

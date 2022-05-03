import Router from "./router";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div>
        <Router />
      </div>
    </UserProvider>
  )
}

export default App

import { ThemeProvider } from "styled-components";
import { UserContextProvider } from "./context/UserContext";
import theme from "./global/theme";
import SearchFruit from "./pages/SearchFruit";

function App() {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <SearchFruit />
        </div>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { update } from "./feature/settings";

function App() {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleChange = (openAiApiKey: string) => {
    if (!openAiApiKey) {
      return;
    }
    dispatch(
      update({
        openAiApiKey,
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>{JSON.stringify(settings)}</p>
        <textarea
          name=""
          id=""
          value={settings.openAiApiKey}
          onChange={(e) => handleChange(e.target.value)}
        ></textarea>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

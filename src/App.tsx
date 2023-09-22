import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect, useState } from "react";
import { generatePrompt } from "./feature/prompt-generator";
import { getActiveTab } from "./feature/tabs";

function App() {
  const settings = useAppSelector((state) => state.settings);
  const [jobPost, setJobPost] = useState("");
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState("");

  const fetchUrl = async () => {
    const tab = await getActiveTab();
    setUrl(tab.url!);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  useEffect(() => {
    if (!jobPost) {
      return;
    }
    setPrompt(
      generatePrompt(jobPost, url, settings.keyPoints, settings.instructions)
    );
  }, [jobPost]);

  return (
    <div className="w-96 h-96">
      <div>
        <div className="p-2">
          <span>URL: {url}</span>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Post</span>
          </label>
          <textarea
            className="h-24 textarea textarea-bordered"
            value={jobPost}
            onChange={(e) => setJobPost(e.target.value)}
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Prompt</span>
          </label>
          <textarea
            className="h-48 textarea textarea-bordered"
            readOnly
            value={prompt}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;

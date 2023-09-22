import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect, useState } from "react";
import { generatePrompt } from "./feature/prompt-generator";

function App() {
  const settings = useAppSelector((state) => state.settings);
  const [jobPost, setJobPost] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    if (!jobPost) {
      return;
    }
    setPrompt(
      generatePrompt(jobPost, settings.keyPoints, settings.instructions)
    );
  }, [jobPost]);

  return (
    <div className="w-96 h-96">
      <div>
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

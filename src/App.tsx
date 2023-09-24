import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect, useState } from "react";
import { generatePrompt } from "./feature/prompt-generator";
import { getActiveTab } from "./feature/tabs";
import Layout from "./Layout";
import { getSettings, update } from "./feature/settings";

function App() {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  const [jobPost, setJobPost] = useState("");
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState("");

  const fetchUrl = async () => {
    const tab = await getActiveTab();
    setUrl(tab.url!);
  };

  const fetchSettings = async () => {
    const settings = await getSettings();
    dispatch(update(settings));
  };

  useEffect(() => {
    fetchUrl();
    fetchSettings();
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
    <Layout>
      <div>
        <div className="flex justify-center text-center">
          <span className="p-2 text-xl font-bold text-center">
            Prompt Generator
          </span>
        </div>
        <p className="text-center">
          Paste the job description in the Job Post Text Area
        </p>
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
    </Layout>
  );
}

export default App;

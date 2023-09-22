import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetSettings } from "./feature/settings/storage";

export default function Layout({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  return (
    <div className="w-96 h-96">
      <div>{children}</div>
      <div className="btm-nav">
        <button
          className="text-pink-600 bg-pink-200"
          onClick={() => navigate("/")}
        >
          <span className="btm-nav-label">Home</span>
        </button>

        <button
          className="text-blue-600 bg-blue-200 border-blue-600"
          onClick={() => navigate("/settings")}
        >
          <span className="btm-nav-label">Settings</span>
        </button>
        <button
          className="text-blue-600 bg-blue-200 border-blue-600"
          onClick={() => resetSettings()}
        >
          <span className="btm-nav-label">Reset Settings</span>
        </button>
      </div>
    </div>
  );
}

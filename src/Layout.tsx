import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Layout({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const location = useLocation();

  const getClassNameIfActive = (navigationPath: string): string => {
    if (location?.pathname !== navigationPath) {
      return "";
    }
    return "active text-bold";
  };
  return (
    <div className="w-96 h-96">
      <div>{children}</div>
      <div className="btm-nav btm-nav-xs">
        <button
          className={`text-pink-600 bg-pink-200 ${getClassNameIfActive("/")}`}
          onClick={() => navigate("/")}
        >
          <span className="btm-nav-label">Home</span>
        </button>

        <button
          className={`text-blue-600 bg-blue-200 border-blue-600 ${getClassNameIfActive(
            "/settings"
          )}`}
          onClick={() => navigate("/settings")}
        >
          <span className="btm-nav-label">Settings</span>
        </button>
      </div>
    </div>
  );
}

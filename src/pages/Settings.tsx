import React from "react";
import Layout from "../Layout";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { reset, update } from "../feature/settings";

const ITEM_SPLITTER = "\n";

export default function Settings() {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleChangeKeyPoints = (input: string) => {
    dispatch(
      update({
        ...settings,
        keyPoints: input.split(ITEM_SPLITTER),
      })
    );
  };
  const handleChangeInstructions = (input: string) => {
    dispatch(
      update({
        ...settings,
        instructions: input.split(ITEM_SPLITTER),
      })
    );
  };

  const resetSettings = () => {
    dispatch(reset());
  };

  return (
    <Layout>
      <div className="flex justify-center text-center">
        <span className="p-2 text-xl font-bold text-center">Settings</span>

        <button className="text-blue-600 " onClick={() => resetSettings()}>
          <span className="text-xs">Reset</span>
        </button>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Key Points</span>
        </label>
        <textarea
          className="h-24 textarea textarea-bordered"
          value={settings.keyPoints
            ?.map((item) => `${item}`)
            ?.join(ITEM_SPLITTER)}
          onChange={(e) => handleChangeKeyPoints(e.target.value)}
        ></textarea>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Instructions</span>
        </label>
        <textarea
          className="h-24 textarea textarea-bordered"
          value={settings.instructions
            ?.map((item) => `${item}`)
            ?.join(ITEM_SPLITTER)}
          onChange={(e) => handleChangeInstructions(e.target.value)}
        ></textarea>
      </div>
    </Layout>
  );
}

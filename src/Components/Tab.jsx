import React from "react";
import {useSnapshot} from "valtio";
import state from "../store";

const Tab = ({tab, isFilterTab, IsActiveTab, handleClick}) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && IsActiveTab
      ? {backgroundColor: snap.color, opacity: 0.5}
      : {backgroundColor: "transparent", opacity: 1};

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab
        ? "rounded-full glassmorhism"
        : "rounded-4"}`}
      onClick={handleClick}
    >
      <img 
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? 'w-2/3 h-2/3 ' : 'w-11/12 h-11/12 object-contain'} ${tab.name === 'mouse' ? 'w-8 h-8' : ''} `}
      />

    </div>
  );
};

export default Tab;

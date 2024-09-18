import React from "react";

const EmergencyOverrideButton = ({ triggerEmergencyOverride }) => {
  return (
    <button
      onClick={triggerEmergencyOverride}
      className="emergency-btn bg-red-500 text-white px-4 py-2 rounded mt-4"
    >
      Emergency Override
    </button>
  );
};

export default EmergencyOverrideButton;

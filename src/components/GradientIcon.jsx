import React from "react";

function GradientIcon({icon:Icon}) {
    return (
      <div className="gradient-icon" >
        <svg width="0" height="0">
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7e5bef" stopOpacity="1" />
            <stop offset="50%" stopColor="#5a31ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#3f00ff" stopOpacity="1" />
          </linearGradient>
        </svg>
        <Icon size={50}/>
      </div>
    );
  };

  export default GradientIcon;
import React, { useState } from "react";

function Place(props) {
  const { onCheckin, title, id, user_names } = props;
  const [disabled, setDisabled] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <span style={{ minWidth: "120px" }}>{title}</span>
      <button
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
          onCheckin(id, () => {
            setDisabled(false);
          });
        }}
      >
        Check in
      </button>
      <span>
        {user_names ? user_names.length : 0}{" "}
        {user_names && user_names.length == 1 ? "user" : "users"} checked in
        here
      </span>
    </div>
  );
}

export default Place;

import React from "react";

const GetProfilePage = (props: { profile_name?: string }) => {
  return (
    <div>
      <h1>{props.profile_name ?? ""}</h1>
    </div>
  );
};

export const renderProfilePage = (props: { profile_name?: string }) => {
  return React.createElement(GetProfilePage, {
    profile_name: props.profile_name,
  });
};

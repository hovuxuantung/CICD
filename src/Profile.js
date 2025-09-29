import React from "react";

function Profile() {
  return React.createElement(
    "div",
    { className: "profile-container" },
    React.createElement("img", {
      src: process.env.PUBLIC_URL + "/my-avatar.jpg", 
      alt: "Profile",
      className: "profile-pic",
    }),
    React.createElement("h2", null, "Hồ Vũ Xuân Tùng"),
    React.createElement("p", null, "Web Developer | React | Node.js"),
    React.createElement(
      "div",
      { className: "profile-info" },
      React.createElement("p", null, "📧 tung98464@donga.edu.vn"),
      React.createElement("p", null, "📍 Đà Nẵng, Việt Nam")
    )
  );
}

export default Profile;

import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["Full Stack Web Developer", "MERN Stack Developer"  ],
        // strings: ["Passionate about changing the world with technology"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
};

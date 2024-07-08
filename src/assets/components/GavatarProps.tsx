// src/components/Gravatar.tsx
import React from "react";
import md5 from "md5";

interface GravatarProps {
  email: string;
  size?: number;
}

const Gravatar: React.FC<GravatarProps> = ({ email, size = 100 }) => {
  const hash = md5(email.trim().toLowerCase());
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=${size}`;

  return <img src={gravatarUrl} alt="Gravatar" className="rounded-full" />;
};

export default Gravatar;

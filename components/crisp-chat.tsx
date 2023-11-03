"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d8384768-faa0-473c-8b02-0a5e88027d9c");
  }, []);

  return null;
};

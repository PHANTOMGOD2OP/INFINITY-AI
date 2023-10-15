"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f4db8fa8-e8ed-4fea-8f47-3224e32218ea");
  }, []);

  return null;
};

import React from "react";

export interface Props {
  children: React.ReactNode;
  variation?: "light" | "dark";
  type?: "standard" | "centered";
  isDashBoard?: boolean;
}

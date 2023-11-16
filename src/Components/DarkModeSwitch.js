"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(()=>setMounted(true) , []); //when page is rendered we set it to true.

  const currentTheme = theme == "system" ? systemTheme : theme;
  return <>{mounted && (currentTheme == "dark" ? (<MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={()=>{setTheme("light")}} />) : (<BsMoonFill className="text-xl cursor-pointer hover:text-amber-500" onClick={()=>setTheme("dark")} />))}</>;
}

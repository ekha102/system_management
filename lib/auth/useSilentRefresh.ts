"use client";

import { useEffect } from "react";

export default function useSilentRefresh() {

useEffect(() => {

const refresh = async () => {
  try {
    await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error("Refresh failed");
  }
};

// refresh every 4 minutes (token expires in 5)
const interval = setInterval(refresh, 4 * 60 * 1000);

return () => clearInterval(interval);

}, []);

}
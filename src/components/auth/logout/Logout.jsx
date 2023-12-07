import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    AuthService.logout();
    navigate("/login");
  });

  return null;
}

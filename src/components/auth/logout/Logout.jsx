import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthService } from "../../../services/AuthService";
import { logout } from "../../../app/auth/auth";

export function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    AuthService.logout();
    navigate("/login");
  });

  return null;
}

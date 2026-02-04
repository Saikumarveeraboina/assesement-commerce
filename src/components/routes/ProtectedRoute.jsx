import { useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
    const navigate = useNavigate();
if (localStorage.getItem("role") === "user") {  
        navigate("/user");
        } else if (localStorage.getItem("role") === "admin") {
        navigate("/vendor");
        }
        navigate("/login");
        
}

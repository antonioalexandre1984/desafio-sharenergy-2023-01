import { HomePage } from "../../pages/Home";
import { useAuth } from "../hooks/useAuth";


export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth();
    if (!auth.user) {
        return <HomePage />;
    }
    return children;
};
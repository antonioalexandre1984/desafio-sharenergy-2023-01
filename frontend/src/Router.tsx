import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/contexts/RequireAuth";
import { DefaultLayout } from "./components/Layouts/DefaultLayout";
import { ApiUsers } from "./pages/ApiUsers";
import { CrudUsersPage } from "./pages/CrudUsers";
import { FormPage } from "./pages/CrudUsers/FormPage";
import { HomePage } from "./pages/Home";
import { RefreshPage } from "./pages/RefreshPage";
import { StatusPage } from "./pages/StatusPage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>

                <Route path="/" element={< HomePage />} />

                <Route path="/api" element={<RequireAuth><ApiUsers /></RequireAuth>} />

                <Route path="/crud" element={<RequireAuth>< CrudUsersPage /></RequireAuth>} />

                <Route path="/form" element={<RequireAuth>< FormPage /></RequireAuth>} />

                <Route path="users/:_id" element={<RequireAuth><CrudUsersPage /></RequireAuth>} />

                <Route path="/status" element={<RequireAuth><StatusPage /></RequireAuth>} />

                <Route path="/image" element={<RequireAuth><RefreshPage /></RequireAuth>} />

            </Route>
        </Routes>
    );
}
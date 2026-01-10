import { createBrowserRouter } from "react-router-dom";

import IndexPageLayout from "./pageLayouts/IndexPageLayout";
import ErrorPage from "./pages/ErrorPage";

import DashboardPage from "./pages/dashboard/DashboardPage";
import MinistriesPage from "./pages/ministries/MinistriesPage";
import DepartmentPage from "./pages/departments/DepartmentPage";
import NominalPage from "./pages/nominal/NominalPage";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <IndexPageLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <DashboardPage /> },
            { path: "/ministries", element: <MinistriesPage /> },
            { path: "/ministries/:ministryId/departments", element: <DepartmentPage /> },
            { path: "/ministries/:ministryId/departments/:departmentId/staff", element: <NominalPage /> }
        ],
    },
]);

export default router;
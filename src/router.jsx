import { createBrowserRouter } from "react-router-dom";

import IndexPageLayout from "./pageLayouts/IndexPageLayout";

import ErrorPage from "./pages/errorPage/ErrorPage";

import Dashboard from "./Pages/Dashboard/dashboard";
import NominalRoll from "./Pages/Nominall/nominall";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <IndexPageLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "nominal", element: <NominalRoll /> }
        ],
    },
]);

export default router;
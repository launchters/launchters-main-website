import NoLogoLayout from "@/app/layouts/NoLogoLayout";
import DashboardLayout from "@/app/layouts/dashboard/DashboardLayout";
import AddStaffForm from "@components/staff/partials/forms/AddStaffForm";
import FormPage from "@pages/FormPage";
import LoadingPage from "@pages/LoadingPage";
import { JSXElementConstructor, ReactElement } from "react";
import { RouteObject, useNavigate, useRoutes } from "react-router-dom";
import { useEffectOnce } from "../hooks/useEffectOnce";

// ----------------------------------------------------------------------

const Router = (): ReactElement<
  any,
  string | JSXElementConstructor<any>
> | null => {
  const navigate = useNavigate();

  useEffectOnce(() => {
    navigate("/staff/create", { replace: true });
  });

  const routeList: RouteObject[] = [
    {
      path: "page",
      element: <NoLogoLayout />,
      children: [
        {
          path: "loading",
          element: <LoadingPage />,
        },
      ],
    },
    // TODO: Esta ruta hay que agregarla al otro proyecto
    // {
    //   path: "lead-magnets",
    //   element: <DashboardLayout />,
    //   children: [
    //     {
    //       path: "profit-calculator-gp-001",
    //       element: (
    //         <FormPage title="Crear trabajador" form={<AddStaffForm />} />
    //       ),
    //     },
    //   ],
    // },
    // ----------------------
    {
      path: "staff",
      element: <DashboardLayout />,
      children: [
        {
          path: "create",
          element: (
            <FormPage title="Crear trabajador" form={<AddStaffForm />} />
          ),
        },
      ],
    },
  ];

  return useRoutes(routeList);
};
// ----------------------------------------------------------------------

export default Router;

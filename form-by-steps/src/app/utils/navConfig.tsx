import { displayIcon } from "@utils/displayIcon";

// ------------------------------------------------------

export const staffPath = `/staff`;
export const companyPath = `/company`;
export const clientsPath = `/client`;
export const adminDashboardPath = `/dashboard`;

export const navIcons = {
  companies: "ic:business-center",
  staff: "ant-design:tool-filled",
  clients: "eva:people-fill",
  dashboard: "eva:pie-chart-outline",
  logout: "eva:log-out-outline",
};

const getNavConfig = () => {
  const navConfigForRole: { title: string; path: string; icon: JSX.Element }[] =
    [
      {
        title: "Trabajadores",
        path: staffPath,
        icon: displayIcon({ name: navIcons.staff, size: 22 }),
      },
    ];

  return navConfigForRole;
};

export default getNavConfig;

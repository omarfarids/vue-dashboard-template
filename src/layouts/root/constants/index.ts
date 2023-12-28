import { Type_Nav_Items } from "@/constants/types";

export const NAV_ITEMS: Type_Nav_Items[] = [
  // icons code comes from the next link : https://icones.js.org/collection/all?s=home      "SVG formula"
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "pi pi-home",
  },
  {
    name: "Onboarding",
    path: "/onboarding",
    icon: "pi pi-users",
  },
  {
    name: "Users",
    path: "/users",
    icon: "pi pi-users",
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: "pi pi-arrow-right-arrow-left",
  },
  {
    name: "Reports",
    path: "/reports",
    icon: "pi pi-file",
  },
];

import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "@/components/layouts/MainLayOut";
import { Home } from "@/pages/Home/Home.component";

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children: [
        {
          index: true,
          lazy: async () => {
            const { Home } = await import("../../pages/Home/Home.component");
            return { Component: Home };
          },
        },
      ],
    },
  ]);

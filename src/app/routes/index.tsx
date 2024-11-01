// routes.ts
import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "@/components/layouts/MainLayOut";
import { movieDetailLoader } from "../loaders/movieDetailLoader";

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
        {
          path: "movie/:id",
          lazy: async () => {
            const { ShowMovie } = await import(
              "@/components/ui/ShowMovie/ShowMovie.component"
            );
            return { Component: ShowMovie };
          },
          loader: movieDetailLoader(queryClient),
        },
      ],
    },
  ]);

import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./Root";
import { TimePage } from "./pages/TimePage";
import { TimePost } from "./pages/TimePost";
import { EventPost } from "./pages/EventPost";
import { AnnouncementPost } from "./pages/AnnouncementPost";
import { LiveClassPost } from "./pages/LiveClassPost";
import { CommunityPage } from "./pages/CommunityPage";
import { WikiPage } from "./pages/WikiPage";
import { DepartmentsPage } from "./pages/DepartmentsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { SavedPage } from "./pages/SavedPage";
import { NotificationsPage } from "./pages/NotificationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Navigate to="/time" replace />,
      },
      {
        path: "time",
        children: [
          { index: true, Component: TimePage },
          { path: ":id", Component: TimePost },
        ],
      },
      {
        path: "event",
        children: [
          { path: ":id", Component: EventPost },
        ],
      },
      {
        path: "announcement",
        children: [
          { path: ":id", Component: AnnouncementPost },
        ],
      },
      {
        path: "liveclass",
        children: [
          { path: ":id", Component: LiveClassPost },
        ],
      },
      {
        path: "community",
        children: [
          { index: true, Component: CommunityPage },
          { path: ":id", Component: CommunityPage },
        ],
      },
      {
        path: "wiki",
        children: [
          { index: true, Component: WikiPage },
          { path: ":id", Component: WikiPage },
        ],
      },
      {
        path: "idari", // Renamed from departments
        children: [
          { index: true, Component: DepartmentsPage },
          { path: ":id", Component: DepartmentsPage },
        ],
      },
      {
        path: "profile",
        children: [
          { index: true, Component: ProfilePage },
          { path: ":userId", Component: ProfilePage },
        ],
      },
      {
        path: "notifications",
        Component: NotificationsPage,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
      {
        path: "saved",
        Component: SavedPage,
      },
    ],
  },
]);

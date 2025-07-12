import type { RouteRecordRaw } from "vue-router";

export const informationNavItem = {
  name: "Information",
  path: "/information",
  enabled: true,
  routes: [
    {
      path: "/information",
      name: "information",
      meta: {
        title: "信息",
        isShow: true,
        pageId: "information",
        permission: "view_information",
        showInTag: false,
        order: 1,
      },
      children: [
        {
          path: "i1",
          name: "i1",
          meta: {
            title: "信息页面 1",
            isShow: true,
            pageId: "page-i1",
            permission: "view_i1",
            showInTag: true,
            order: 1,
          },
        },
      ],
    },
  ],
};
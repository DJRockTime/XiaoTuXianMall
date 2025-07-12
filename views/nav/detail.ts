import type { RouteRecordRaw } from "vue-router";

export const detailNavItem = {
  name: "Detail",
  path: "/detail",
  enabled: false,
  routes: [
    {
      path: "/detail",
      name: "detail",
      meta: {
        title: "详情",
        isShow: true,
        pageId: "detail",
        permission: "view_detail",
        showInTag: false,
        order: 1,
      },
      children: [
        {
          path: "d1",
          name: "d1",
          meta: {
            title: "详情页面 1",
            isShow: true,
            pageId: "page-d1",
            permission: "view_d1",
            showInTag: true,
            order: 1,
          },
        },
      ],
    },
  ],
};
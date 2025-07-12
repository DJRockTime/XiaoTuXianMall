import type { RouteRecordRaw } from "vue-router";

export const homeNavItem = {
  name: "Home",
  path: "/home",
  enabled: true,
  routes: [
    {
      path: "/home",
      name: "home",
      meta: {
        title: "首页",
        isShow: true,
        pageId: "home",
        permission: "view_home",
        showInTag: false,
        order: 1,
      },
      children: [
        {
          path: "a",
          name: "a",
          meta: {
            title: "页面 A",
            isShow: true,
            pageId: "page-a",
            permission: "view_a",
            showInTag: true,
            order: 1,
          },
        },
        {
          path: "dialog/:id",
          name: "a-dialog",
          meta: {
            title: "对话框",
            isShow: false,
            pageId: "page-a",
            permission: "view_a",
            showInTag: true,
            order: 2,
          },
        },
        {
          path: "b",
          name: "b",
          meta: {
            title: "页面 B",
            isShow: true,
            pageId: "page-b",
            permission: "view_b",
            showInTag: true,
            order: 3,
          },
        },
        {
          path: "c",
          name: "c",
          meta: {
            title: "页面 C",
            isShow: true,
            pageId: "page-c",
            permission: "view_c",
            showInTag: true,
            order: 4,
          },
        },
        {
          path: "d",
          name: "d",
          meta: {
            title: "页面 D",
            isShow: true,
            pageId: "page-d",
            permission: "view_d",
            showInTag: true,
            order: 5,
          },
        },
      ],
    },
  ],
};
import type { RouteRecordRaw } from "vue-router";

export const productNavItem = {
  name: "Product",
  path: "/product",
  enabled: true,
  routes: [
    {
      path: "/product",
      name: "product",
      meta: {
        title: "产品",
        isShow: true,
        pageId: "product",
        permission: "view_product",
        showInTag: false,
        order: 1,
      },
      children: [
        {
          path: "p1",
          name: "p1",
          meta: {
            title: "产品页面 1",
            isShow: true,
            pageId: "page-p1",
            permission: "view_p1",
            showInTag: true,
            order: 1,
          },
        },
        {
          path: "p2",
          name: "p2",
          meta: {
            title: "产品页面 2",
            isShow: true,
            pageId: "page-p2",
            permission: "view_p2",
            showInTag: true,
            order: 2,
          },
        },
      ],
    },
  ],
};
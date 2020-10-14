/*用于配置页面的基础路由*/
export const constantRouterMap = [
  {
    path: "/",
    component: () => import("@/views/layouts/index"),
    redirect: "/home",
    mate: {
      title: "首页"
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/index"),
        mate: {
          keepAlive: false
        },
      },
      {
        path: "/home/games",
        name: "GamesDetail",
        component: () => import("@/views/homeDetail/index"),
        mate: {
          keepAlive: false
        }
      },
      {
        path: "/home/games/detail",
        name: "Games",
        component: () => import("@/views/gamesDetail/index"),
        mate: {
          keepAlive: false
        }
      },
      {
        path: "/player",
        name: "Player",
        component: () => import("@/views/player/index"),
        mate: {
          keepAlive: false
        }
      },
      {
        path: "/collection",
        name: "Collection",
        component: () => import("@/views/collection/index"),
        mate: {
          // title: "集锦", // 做页面的导航栏的时候就可以用
          keepAlive: false
        }
      }
    ]
  }
];

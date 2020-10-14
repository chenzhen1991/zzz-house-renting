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
          title: "首页",
          keepAlive: false
        },
        children: [

        ]
      },
      {
        path: "/home/games",
        name: "GamesDetail",
        component: () => import("@/views/homeDetail/index"),
        mate: {
          title: "比赛详情",
          keepAlive: false
        }
      },
      {
        path: "/games/detail",
        name: "Games",
        component: () => import("@/views/gamesDetail/index"),
        mate: {
          title: "比赛详情",
          keepAlive: false
        }
      },
      {
        path: "/player",
        name: "Player",
        component: () => import("@/views/player/index"),
        mate: {
          title: "球员",
          keepAlive: false
        }
      },
      {
        path: "/collection",
        name: "Collection",
        component: () => import("@/views/collection/index"),
        mate: {
          title: "集锦",
          keepAlive: false
        }
      }
    ]
  }
];

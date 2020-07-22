import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//vue router는 plugin이기 때문에 use() 함수를 이용해 등록한다.
Vue.use(VueRouter);

//route정의. 각 route는 반드시 component와 매핑되어야 함.
//component는 Vue.extend()를 통해 만들어진 실제 component 생성자이거나, component옵션 객체임
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // ES6 화살표 함수 사용법 익힐 것
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "child",
        //name: "Child",
        component: () => import("../views/Child.vue")
      },
      {
        path: ":id",
        component: () => import("../views/DynamicRoute.vue")
      }
    ]
  },
  {
    path: "/aggrid",
    name: "AgGrid",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AgGrid.vue")
  },
  {
    path: "/agtable",
    name: "Table",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AgTable.vue")
  }
];

//routes옵션과 함께 router 인스턴스 생성. 추가 옵션 전달 가능
const router = new VueRouter({
  //브라우저 history 객체의 pushState() API를 사용하기 위한 설정
  mode: "history",
  base: process.env.BASE_URL,
  //routes: routes의 줄임 표현
  routes
});

export default router;

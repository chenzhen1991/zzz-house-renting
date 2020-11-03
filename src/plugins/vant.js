// 按需全局引入 vant组件
import Vue from "vue";
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  CellGroup,
  Field,
  Icon,
  Progress,
  Slider,
  Calendar,
  RadioGroup,
  Radio,
  Form,
  Uploader,
  Tab,
  Tabs,
} from "vant";
Vue.use(Button);
Vue.use(Cell);
Vue.use(List);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(CellGroup).use(Field);
Vue.use(Icon);
Vue.use(Progress);
Vue.use(Slider);
Vue.use(Calendar);
Vue.use(Form);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Uploader);
Vue.use(Tab);
Vue.use(Tabs);

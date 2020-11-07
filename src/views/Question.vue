<template>
  <div :currentIndex="currentIndex">
    <!--第一步-->
    <QuestionStep :radioData="radioData1"	v-if="1 === currentIndex" @selectAnswer="selectAnswer" currentIndex="1"/>
    <!--第二步-->
    <QuestionStep :radioData="radioData2" v-if="2 === currentIndex" @selectAnswer="selectAnswer" currentIndex="2"/>
    <!--第三步-->
    <QuestionStep :radioData="radioData3" v-if="3 === currentIndex" @selectAnswer="selectAnswer" currentIndex="3"/>
    <!--第四步-->
    <QuestionStep :radioData="radioData4" v-if="4=== currentIndex" @selectAnswer="selectAnswer" currentIndex="4"/>
    <!--第五步-->
    <QuestionFive :radioData="radioData5" v-if="5 === currentIndex" @selectAnswer="selectAnswer" currentIndex="5"/>
    <!--设置完成-->
    <QuestionFinish :radioData="radioData6" v-if="6 === currentIndex"/>
  </div>
</template>

<script>
import QuestionStep from "components/question/QuestionStep";
import QuestionFive from "components/question/QuestionFive";
import QuestionFinish from "components/question/QuestionFinish";
export default {
  name: "Question",
  components:{
    QuestionStep,
    QuestionFive,
    QuestionFinish
  },
  data(){
    return{
      selectQuestion: [],
      currentIndex: 1,
      radioData1:{
        index:1,
        title: '你多久打扫一次房间？',
        radio: 1,
        endData: {
          icon: "todo-list-o"
        },
        arr:[
          {
            id: 1,
            name: "从不",
          },
          {
            id: 2,
            name: "每月一次"
          },
          {
            id: 3,
            name: "每周一次"
          },
          {
            id:4,
            name: "一两天一次"
          }
        ]
      },
      radioData2:{
        index:2,
        title: '你吸烟吗？',
        radio: 1,
        endData: {
          icon: "fire-o"
        },
        arr:[
          {
            id: 1,
            name: "是的",
          },
          {
            id: 2,
            name: "不"
          },
          {
            id: 3,
            name: "偶尔"
          },
        ]
      },
      radioData3:{
        index:3,
        title: '对于养宠物你如何看？',
        radio: 1,
        endData: {
          icon: "shop-o"
        },
        arr:[
          {
            id: 1,
            name: "请不要养宠物",
          },
          {
            id: 2,
            name: "看是什么宠物"
          },
          {
            id: 3,
            name: "自己不养，但不介意室友养，可以和平相处"
          },
          {
            id: 4,
            name: "我自己也养宠物"
          },
        ]
      },
      radioData4:{
        index:4,
        title: '如何看到访客？',
        radio: 1,
        endData: {
          icon: "friend-o"
        },
        arr:[
          {
            id: 1,
            name: "请不要带外人来？",
          },
          {
            id: 2,
            name: "只有白天"
          },
          {
            id: 3,
            name: "晚上也可以"
          },
        ]
      },
      radioData5:{
        index:5,
        title: '你的兴趣是什么？',
        endData: {
          icon: "music-o"
        },
        arr:[
          {
            id: 1,
            name: "美食",
          },
          {
            id: 2,
            name: "体育&健身"
          },
          {
            id: 3,
            name: "派对"
          },
          {
            id:4,
            name: "看书阅读"
          },
          {
            id:5,
            name: "夜生活"
          },
          {
            id:6,
            name: "听音乐"
          },
          {
            id:7,
            name: "旅游"
          },
          {
            id:8,
            name: "玩游戏"
          },
          {
            id:9,
            name: "看电视"
          }
        ]
      },
      radioData6:{
        index:6,
        title: '非常好！',
        endData: {
          icon: "passed"
        },
      }
    }
  },
  methods: {
    selectAnswer(v,index) {
      console.log("接收")
      console.log(v, Number(index) + 1)
      this.selectQuestion.push(v)
      this.currentIndex = Number(index) + 1
    }
  },
};
</script>

<style scoped></style>

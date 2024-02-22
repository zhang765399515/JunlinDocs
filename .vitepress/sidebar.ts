/*
 * @Author: 张峻霖
 * @Date: 2023-08-02 16:00:06
 * @LastEditTime: 2024-02-22 11:43:13
 * @Description:
 * @FilePath: \vitepress-demo-mondaylab\docs\.vitepress\sidebar.ts
 */

export default {
  "/": [
  ],
  "/summaryPlanning/summary/": sidebarSummary(),
  "/summaryPlanning/planning/": sidebarPlanning(),
  "/programming/actualCombat/": actualCombatProgram(),
  "/programming/study/": studyProgram(),
  
};

function sidebarSummary(){
  return [{
    text: "年末总结",
    items: [
      {
        text: "2023年末总结",
        link: "/summaryPlanning/summary/2023",
      },
    ],
  }]
}
function sidebarPlanning(){
  return [
  {
    text: "计划",
    items: [
      {
        text: "2024计划",
        items: [
          {
            text: "总计划",
            link: "/summaryPlanning/planning/2024",
          },
          {
            text: "每日时间计划",
            link: "/summaryPlanning/planning/dateDay",
          },
          {
            text: "二月计划",
            link: "/summaryPlanning/planning/mouth/February",
          }],
      },
    ],
  }]
}
function actualCombatProgram() {
  return [
    {
      text: "💻 实战操作",
      items: [
        { text: "介绍", link: "/programming/actualCombat/" },
        {
          text: "基础",
          items: [
            {
              text: "drag 拖拽",
              link: "/programming/actualCombat/drag",
            }
          ],
        },
        {
          text: "进阶",
          items: [
           
          ],
        },
      ],
    },
  ];
}
function studyProgram() {
  return [
    {
      text: "💻 学习",
      items: [
        { text: "介绍", link: "/programming/study/" },
        {
          text: "基础",
          items: [
            
            {
              text: "常用css",
              link: "/programming/study/css",
            }
          ],
        },
        {
          text: "个人编程记录",
          items: [
            {
              text: "Call理解",
              link: "/programming/study/call-learn",
            },
            {
              text: "npm发布包",
              link: "/programming/study/npm",
            }
          ],
        },
      ],
    },
  ];
}
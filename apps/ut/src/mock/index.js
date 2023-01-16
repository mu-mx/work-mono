/*
 * @Author: chenzhen220 chenzhen220@jd.com
 * @Date: 2022-11-16 14:56:57
 * @LastEditors: chenzhen220 chenzhen220@jd.com
 * @LastEditTime: 2022-11-17 11:08:19
 * @FilePath: /体验门户/voice-portal-pc-ut/src/mock/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from "mockjs";
Mock.XHR.prototype.withCredentials = true;
import qs from "qs";

if (process.env.NODE_ENV === "development") {
  Mock.mock(/^\//, "post", (options) => {
    const parsedOptions = qs.parse(options.body);
    const body = JSON.parse(parsedOptions.body);
    switch (body.action) {
      case "/test/test":
        return {
          code: 0,
          data: {
            name: "jack",
            age: 20,
          },
        };
      case "/api/article/details":
        return {
          message: "操作成功",
          code: 0,
          data: {
            articleId: "文章id",
            articleTitle: "文章标题",
            articleContent: "文章内容",
            publishDate: "2022年12月9日",
            sourceName: "来源",
            orderType:
              "单号类型+具体单号（事件号/服务单号/纠纷单号）此处不明确",
            orderId: "单号id",
            pictureDTOList: [
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
              "https://img10.360buyimg.com/asf/jfs/t1/143136/22/32034/201957/6370f50aEc5b83422/9279c17f76c78696.jpg",
            ],
            topicResDTOList: [
              {
                topicId: "01",
                topicName: "专题名称",
                topicDesc: "专题描述",
              },
            ],
          },
        };
      case "/api/home/articleList":
        return {
          message: "操作成功",
          code: 200,
          data: {
            articleList: [
              {
                articleId: "文章id",
                articleTitle: "文章标题",
                content: "文章内容",
                browsesNum: "浏览数量(我们自己存库实现，是个人给文章的关系)",
                commentNum: "评论数(调用智能接口实现)",
                collectNum: "收藏数(调用智能接口实现)",
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress: "图片链接地址",
                  },
                  {
                    pictureAddress: "图片链接地址",
                  },
                  {
                    pictureAddress: "图片链接地址",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: "01",
                    topicName: "专题名称",
                    topicDesc: "专题描述",
                  },
                ],
              },
            ],
            totalCount: "总条数",
            pageNumber: "没有多少条",
            pageSize: "第几页",
          },
        };
      //获取专题下得列表
      case "/api/home/articleList":
        return {
          message: "操作成功",
          code: 0,
          data: {
            articleList: [
              {
                articleId: 1,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 2,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 3,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 4,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 5,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 6,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 7,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 8,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 9,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
              {
                articleId: 10,
                articleTitle: "榨汁机起火，危害人身安全",
                content:
                  "昨天收到榨汁机，今天早上拿出来使用，一插上插头就冒烟起火，火势很猛一下子就烧了起来，场面非常恐怖可怕，一家人都吓着了。我马上关了总电源开关，并拍了个照片，及时灭了火，幸好是白天大人也在家，挽救了一场无法想象的火灾。太可怕了。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。还有电线燃烧的恶臭气味我们都不同程度的吸了气味，这些恶臭的气味对人体伤害很大的，只要是家里有小孩。我要求退款赔偿。",
                browsesNum: 13,
                commentNum: 25,
                collectNum: 18,
                publishDate: "2023/10/23",
                pictureDTOList: [
                  {
                    pictureAddress:
                      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  },
                ],
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "满意度",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 2,
                    topicName: "调研",
                    topicDesc: "专题描述",
                  },
                  {
                    topicId: 3,
                    topicName: "头版头条",
                    topicDesc: "专题描述",
                  },
                ],
              },
            ],
            totalCount: 100,
            pageNumber: 1,
            pageSize: 10,
          },
        };
      //获取我的专题及公开专题
      case "/api/topic/myTopic":
        return {
          message: "操作成功",
          code: 0,
          data: {
            publicTopic: [
              {
                topicId: 6,
                topicName: "公共专题-公共专题",
                topicDesc: "公共专题描述",
                isPublictopics: "是",
              },
            ],
            topicList: [
              {
                topicId: 1,
                topicName: "我的",
                topicDesc: "专题描述",
                isPublictopics: 0,
                sort: 1,
              },
              {
                topicId: 2,
                topicName: "我的专题",
                topicDesc: "专题描述",
                isPublictopics: 0,
                sort: 2,
              },
              {
                topicId: 3,
                topicName: "我的专题专题",
                topicDesc: "专题描述",
                isPublictopics: 0,
                sort: 3,
              },
              {
                topicId: 4,
                topicName: "我的专题我的专题我的专题我的专题我的专题我的专题",
                topicDesc: "专题描述",
                isPublictopics: 0,
                sort: 4,
              },
              {
                topicId: 5,
                topicName: "我的专题专",
                topicDesc: "专题描述",
                isPublictopics: 0,
                sort: 5,
              },
            ],
          },
        };
      //获取（全量）推荐专题
      case "/api/topic/fullTopic":
        return {
          message: "操作成功",
          code: 0,
          data: {
            classify: [
              {
                classifyId: 11,
                classifyName: "分类一",
                topicResDTOList: [
                  {
                    topicId: 1,
                    topicName: "我的",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                  {
                    topicId: 2,
                    topicName: "我的专题",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                  {
                    topicId: 3,
                    topicName: "我的专题专题",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                  {
                    topicId: 7,
                    topicName: "健身卡哈斯卡空间Saks的绿卡金塞拉克基拉是",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                  {
                    topicId: 8,
                    topicName: "撒旦士大夫",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                ],
              },
              {
                classifyId: 12,
                classifyName: "分类二",
                topicResDTOList: [
                  {
                    topicId: 4,
                    topicName:
                      "我的专题我的专题我的专题我的专题我的专题我的专题",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                  {
                    topicId: 5,
                    topicName: "我的专题专",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                ],
              },
              {
                classifyId: 13,
                classifyName: "分类三",
                topicResDTOList: [
                  {
                    topicId: 6,
                    topiclName: "公共专题-公共专题",
                    topicDesc: "公共专题描述",
                    isPublictopics: 1,
                  },
                  {
                    topicId: 9,
                    topicName: "飒飒撒大沙发的撒大苏打",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                  {
                    topicId: 10,
                    topicName: "飒飒撒大沙发的撒大苏打",
                    topicDesc: "专题描述",
                    isPublictopics: 0,
                  },
                ],
              },
            ],
          },
        };
    }
  });
}

/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'push-plus',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa88e7a315a96e5dc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd02c3ce283b509083a170427647f9c6e',

  PROVINCE: '广东',
  CITY: '广州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '欣宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'od-Nv5ysGy25mwxQ5qPfvUnU6e68',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '全世界最漂亮的欣欣宝宝', year: '1997', date: '12-04',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '全世界最帅气的森森王子', year: '1998', date: '08-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-06-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'od-Nv53uYPO3lsYuzDvZ6NuRGpok',
    }
  ],

}

module.exports = USER_CONFIG


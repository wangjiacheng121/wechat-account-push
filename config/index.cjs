// config.js
module.exports = {
  USE_PASSAGE: 'server-chan',
  "APP_ID": "wxcefc46b918e71299",
  "APP_SECRET": "cf8ef6c48e6f469fc965ec17336b3a11",
  "IS_SHOW_COLOR": false,
  "CALLBACK_TEMPLATE_ID": "0002",
  "CALLBACK_USERS": [
    {
      "name": "自己",
      "id": "SCT268131THz7Yj7Mi2ykML0doe3TfQDxu"
    }
  ],
  "USERS": [
    {
      "name": "卓宝",
      "id": "SCT268153TjmooPfWl8YHx3puxuz6hgO9p",
      "useTemplateId": "0001",
      "province": "河北省",
      "city": "张家口",
      "horoscopeDate": "02-20",
      "horoscopeDateType": "今日",
      "openUrl": "https://github.com/wangjiacheng121/wechat-account-push",
      "festivals": [
        {
          "type": "*生日",
          "name": "卓卓",
          "date": "01-26",
          "year": "2025"
        },
        {
          "type": "*生日",
          "name": "笑笑",
          "date": "12-26",
          "year": "2024"
        }
      ],
      "customizedDateList": [
        {
          "keyword": 'love_day',
          "date": "2024-11-01"
        }
      ]
    },
    {
      "name": "笑猫",
      "id": "SCT268131THz7Yj7Mi2ykML0doe3TfQDxu",
      "useTemplateId": "0001",
      "province": "河北省",
      "city": "张家口",
      "horoscopeDate": "01-21",
      "horoscopeDateType": "今日",
      "openUrl": "https://shuangxunian.github.io/",
      "festivals": [
        {
          "type": "*生日",
          "name": "卓卓",
          "date": "01-26",
          "year": "2025"
        }
      ],
      "customizedDateList": [
        {
          "keyword":'love_day',
          "date": "2024-11-01"
        }
      ]
    }
  ],
  "SWITCH": {
    "weather": true,
    "holidaytts": true,
    "CIBA": true,
    "oneTalk": false,
    "earthyLoveWords": false,
    "momentCopyrighting": false,
    "poisonChickenSoup": false,
    "poetry": false,
    "horoscope": true,
    "birthdayMessage": true
  }
};

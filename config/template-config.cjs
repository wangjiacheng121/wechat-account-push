/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '宝宝~ 早上好',
    desc: `
      **{{date.DATA}}**
      
      ---
      
      今天是和傻宝在一起的第{{love_day.DATA}}天，爱你❤️
      
      💗{{birthday_message.DATA}} 
      
      ---
      
      城市：{{city.DATA}}
      
      天气☁️：{{weather.DATA}}
      
      温度🌡️: {{min_temperature.DATA}}--{{max_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}

      温馨提示：{{notice.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{comprehensive_horoscope.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG

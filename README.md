# 消息 Server Side

## 消息结构体
```javascript
{
  msgId, // 消息id
  chatType, // 会话类型
  msgType: MSG_TYPE, // 消息类型
  senderUid, // 发送者uid
  receiverUid, // 接收者uid
  groupId, // 群聊id
  message, // 各种子消息类型 (ImMessage, SessionOptMessage, GroupOptMessage, MsgOptMessage)
  sendTime, // 消息发送时间
}
```

## 会话类型
```javascript
enum CHAT_TYPE {
  CT_SINGLE = 1, // 单聊消息
  CT_GROUP = 2, // 群聊消息
}
```

## 消息类型
```javascript
enum MSG_TYPE {
  MT_NORMAL = 1, // 普通消息 ImMessage
  MT_SESSION_OPT = 100, // 会话操作消息 SessionOptMessage
  MT_GROUP_OPT = 101, // 群操作消息 GroupOptMessage
  MT_MSG_OPT = 102, // 消息操作消息 MsgOptMessage
  MT_SYNC = 103, // 其他端同步消息 ImMessage(暂不实现)
}
```

## ImMessage消息子类型
```javascript
enum NORMAL_MSG_TYPE {
  TEXT: 1, // 文本消息
  IMG: 2, // 图片消息
  FILE: 3, // 文件消息
  EXPRESSION: 4, // 表情消息
  LINK: 5, // 链接消息

  VOICE: 6, // 语音消息
  VIDEO: 7, // 小视频消息
}
```

## ImMessage消息结构体
```javascript
// ImMessage
{
  type: NORMAL_MSG_TYPE, // 消息子类型
  extdata, // 扩展字段
  message, // 消息内容
}
  
```


## SessionOptMessage消息子类型
```javascript
enum SOP_MSG_TYPE {
  SESSION_TOP = 1, // 会话置顶
  SESSION_DELETE = 2, // 会话删除
  SESSION_MUTE = 3, // 会话免打扰
}
```

## SessionOptMessage消息结构体
```javascript
// SessionOptMessage
{
  type: SOP_MSG_TYPE,
  sid, // 会话id
  isTop, // 是否置顶
  isMute, // 是否免打扰
}
```


## GroupOptMessage消息子类型
```javascript
enum GOP_MESSAGE_TYPE {
  CREATE_GROUP: 1, // 创建群
  MODIFY_GROUP_NAME: 2, // 修改群名称
  ADD_MEMBERS: 2, // 成员入群
  REMOVE_MEMBERS: 3, // 退出群聊
  MODIFY_NOTICE: 4, // 修改群公告
  MODIFY_OWNER: 5, // 修改群主
  MODIFY_WATER_MASK: 6, // 修改群水印
}
```

## MsgOptMessage消息子类型
```javascript
enum MOP_MSG_TYPE {
  REVOKE: 1, // 消息撤回
}
```










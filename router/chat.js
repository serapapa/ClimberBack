let express = require('express');
let router = express.Router();
let chat = require('../controller/chat.js')

//채팅방 목록
router.get('/', chat.getChatList)
//채팅방 ID에 입장버튼 
router.get('/chatroom/:id',chat.getChatView)
//채팅방 내용보기 
router.get('/message/:id', chat.getMessageView)
//채팅방 내용 찾기
router.get('/find_message/:id', chat.findMessage)
//채팅내용입력
router.get('/insert_message/:id',chat.insertMessage)
//채팅내용삭제
router.delete('/delete_message/:id',chat.deleteMessage)
//채팅방삭제
router.delete('/delete_chatroom/:id', chat.deleteRoom)
//채팅방상단고정
router.get('/fixed_room/:id', chat.fixedChatRoom)
//프로필 호출
router.get('/profile_select', chat.selectProfile)
//대화상대 추가
router.get('/insert_profile/:id', chat.insertProfile)

module.exports = router;
let express = require('express');
let router = express.Router();
let chat = require('../contoller/chat')

router.post('/chat', chat.getChatList)

module.exports = router;
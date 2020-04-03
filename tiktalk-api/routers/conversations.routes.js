const express = require('express');
let router = express.Router();
const controller = require('../controllers/conversations.controller');

//Define route to send a message in a conversation
router.post('/conversations/:id', controller.sendMessage);

//Define route to get all messages from a conversation
router.get('/conversations/:id', controller.getMessagesFromConversation);

module.exports = router;
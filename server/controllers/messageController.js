const router = require('express').Router();
const Chat = require('./../models/chat');
const authMiddleware = require('./../middlewares/authMiddleware');
const Message = require('./../models/message');
const message = require('./../models/message');

router.post('/new-message', authMiddleware, async (req,res)=>{
    try {
        // store the message in message collection
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();

        //update the last message in chat collection
        //Method 1
        // const currentChat = await Chat.findById(req.body.chatId);
        // currentChat.lastMessage = savedMessage._id;
        // await currentChat.save();

        //Method 2
        const currentChat = await Chat.findOneAndUpdate({
            _id: req.body.chatId
        },{
            lastMessage: savedMessage._id,
            $inc: {unreadMessageCount:1}
        });

        res.status(201).send({
            message: 'Message sent successfully',
            success: true,
            data: savedMessage
        })

    } catch (error) {
        res.status(400).send({
            message: error.message,
            success: false
        })
    }
})

router.get('/get-all-messages/:chatId', authMiddleware, async (req,res)=>{
    try {
        const allMessages = await Message.find({chatId: req.params.chatId}).sort({createdAt: 1});

        res.status(200).send({
            message: 'Messages fetched successfully',
            success: true,
            data: allMessages
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
            success: false
        })
    }
})

module.exports = router;
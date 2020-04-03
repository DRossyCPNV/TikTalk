const {Messages, Users} = require('../models');

const sendMessage = async function (req, res) {
    console.log(req.body.firstName);
    console.log(req.body.lastName);

    const message = Messages.build({content: req.body.content,
                                    visible: true,
                                    sentDate: Date.now(),
                                    conversation_id: 1,
                                    user_id: 1,
                                    status_id: 1});
    await message.save();
    console.log("message saved");
    //res.header('Content-Type', 'text/html');
    //res.status(200).send('<p>Test</p>');
}
module.exports.sendMessage = sendMessage;

const getMessagesFromConversation =  async function (req, res) {
    let id_conversation, err, objects;
    id_conversation = req.params.id;

    objects = await Messages.findAll({
        where: {conversation_id: id_conversation},
        include: [{model: Users}]
    });
    let objects_json = [];
    for (let i in objects) {
        objects_json.push(objects[i].toJSON());
    }
    res.header('Content-Type', 'application/json');
    res.status(200).send({messages: objects_json});
    res.send({messages: objects_json});
}
module.exports.getMessagesFromConversation = getMessagesFromConversation;
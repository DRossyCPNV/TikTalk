<template>
    <div id="Conversation">
        <button v-on:click="sendMessage()">Send test message</button>
        <div v-html="showMessages()"></div>
    </div>
</template>

<script>
import API from "@/services/api.js";

export default {
    name: "ConversationArea",
    data : function () {
        return {
            id : 1,
            messages : [] // {} = objet, [] = tableau
        }
    },
    methods: {
        showMessages: function () {
            let texte = "";
            console.log(this.messages);
            this.messages.map((message) => {
                // `Chaine de charactère interprétable` => `${variable à transformer en valeur dans le texte (donc un string)}`
                texte += `</br><b>${message.User.username}</b>: ${message.content}`;
            });
            return texte;
        },
        sendMessage: function () {
            API.sendMessage(this.id);
        }
    },
    created () {
        API.getConversation(this.id).then((res) => {
            this.messages = res.data.messages;
        });

        /*API.sendMessage(message).then((res) => {
            this.messages.push(res.data.message);
        });*/
    }
}
</script>

<style scoped>
    p
    {
        margin: 0;
    }

    #Conversation
    {
        display: flex;
        flex-direction: column;

        width: 1000px;
        margin: 0 auto 70px auto;
    }

    .Message-received
    {
        display: flex;
        margin: 5px 0;
        padding: 20px;
        align-self: flex-start;

        max-width: 600px;

        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 1px 5px 0px rgba(211,211,233,1);
    }

    .Message-sent
    {
        display: flex;
        margin: 5px 0;
        padding: 20px;
        align-self: flex-end;

        max-width: 600px;

        background-color: white;
        border-radius: 20px;
        box-shadow: 1px 1px 5px 0px rgba(202,128,255,1);
    }

    .Message
    {
        color: black;
        flex-shrink: 1;
        text-align: justify;
    }

    @media (max-device-width: 900px)
    {
        /* ----- Conversation ----- */
        #Conversation
        {
            width: 100%;
            margin: 0 auto 140px auto;
        }

        .Message
        {
            font-size: 1.5rem;
        }

        .Message-received
        {
            max-width: 70%;
            margin: 20px 0;
            margin-left: 20px;
            padding: 2rem;

            border-radius: 50px;
        }

        .Message-sent
        {
            max-width: 70%;
            margin: 20px 0;
            margin-right: 20px;
            padding: 2rem;

            border-radius: 50px;
        }
    }
</style>
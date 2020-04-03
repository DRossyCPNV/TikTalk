<template>
    <div id="Messagebar">
        <div id="Messagebar-Center">
            <input id="Message-Input" class="Text" type="text" placeholder="Type your message...">
            <input id="Message-Button" class="Text" type="button" value="Submit">
        </div>
    </div>
</template>

<script>
export default {
    name: "MessageBar"
}
</script>

<style scoped>
    p
    {
        margin: 0;
    }

    #Messagebar
    {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        bottom: 10px;

        width: 100%;
    }

    #Messagebar-Center
    {
        display: flex;
        width: 700px;
        height: 40px;
    }

    #Message-Input
    {
        width: 80%;
        padding: 8px 12px 8px 12px;

        background-color: white;
        outline: none;
        border: none;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        box-shadow: 1px 1px 5px 0px rgba(211,211,233,1);
    }

    #Message-Button
    {
        color: white;

        width: 20%;
        padding: 8px 12px 8px 12px;

        background-color: #9A0DFF;
        outline: none;
        border: none;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        box-shadow: 1px 1px 5px 0px rgba(211,211,233,1);
    }

    @media (max-device-width: 900px)
    {
        /* ----- Messagebar ----- */
        #Messagebar-Center
        {
            width: 100%;
            min-height: 100px;
            margin: 0 20px;
        }

        #Message-Input
        {
            border-top-left-radius: 100px;
            border-bottom-left-radius: 100px;
        }

        #Message-Button
        {
            border-top-right-radius: 100px;
            border-bottom-right-radius: 100px;
        }
    }
</style>
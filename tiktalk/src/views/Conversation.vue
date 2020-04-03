<template>
    <div>
        <NavBar/>
        <ConversationArea/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ConversationArea from "@/components/ConversationArea.vue";
import API from "@/services/api.js";

let results = API.getEventSingle(1);
console.log(results);

export default {
    name: "Conversation",
    components: {
        NavBar,
        ConversationArea
    }    
}
</script>

<style scoped>

</style>
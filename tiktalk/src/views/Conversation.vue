<template>
    <div>
        <NavBar/>
        <ConversationArea/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ConversationArea from "@/components/ConversationArea.vue";

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
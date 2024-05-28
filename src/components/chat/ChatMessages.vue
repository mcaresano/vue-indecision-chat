<template>
<div ref="chatRef" class="flex-1 overflow-y-auto p-4">
  <div class="flex flex-col space-y-2">
    <ChatBubble
      v-for="message in messages" 
      :key="message.id"
      v-bind="message"
    />
    <!-- el v-bind agrega todas las props (elementos) del objeto
      :itsMine="message.itsMine" 
      :message="message.message"
      :image="message.image"
    -->
    <!--
      Estas llamadas se hacen mediante un v-for
      <ChatBubble :itsMine="false" message="Hola, que tal" />
      <ChatBubble itsMine message="Bien y vos ?"/>
      <ChatBubble message="Bien" image="https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif" />
    -->
  </div>
</div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import ChatBubble from './ChatBubble.vue'
import { ChatMessage } from '../../interfaces/chat-message.interface';

interface Props {
    messages: ChatMessage[]
}

const {messages} = defineProps<Props>()

const chatRef = ref<HTMLDivElement|null>(null);

watch(messages, ()=>{
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    })
  }, 10);
});

</script>
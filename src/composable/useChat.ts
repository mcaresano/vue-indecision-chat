import { sleep } from '@/helpers/sleep'
import { type ChatMessage } from '@/interfaces/chat-message.interface'
import type { YesNoResponse } from '@/interfaces/yes-no-response'
import {ref} from 'vue'

export const useChat = () => {
    const messages = ref<ChatMessage>([
        {
          id: new Date().getTime(),
          message: 'Hola Mundo',
          itsMine: true,
        },
        {
          id: new Date().getTime(),
          message: 'Si',
          itsMine: false,
          image:'https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif',
        }
      ])
      
      const getResponse = async()=>{
        const resp = await fetch('https://yesno.wtf/api')
        const data = (await resp.json()) as YesNoResponse;
        return data
      }

      const onMessage = async (text:string)=> {
        if(text.length===0) return
        messages.value.push({
          id: new Date().getTime(),
          itsMine: true,
          message: text,
        })
        // evaluar si termina en ?
        if(!text.endsWith('?'))return;
        await sleep(1.5)
        const {answer, image}= await getResponse();
        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image
          })
      }

    return {
        // properties
        messages,
        // methods
        onMessage
    }
}
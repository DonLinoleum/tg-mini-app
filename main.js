import { Telegraf,Markup } from "telegraf"
import {message} from "telegraf/filters"

const token = "6988573674:AAG-7tpzo7hpAQYZYFbfyiZP-vjg4jn55aQ"
const webAppUrl = 'https://angular-tg-app-b12f7.web.app'

const bot = new Telegraf(token)

bot.command('start',(ctx)=>{
    ctx.reply('Ты пидр!',Markup.keyboard([
        Markup.button.webApp('Отправить сообщение',webAppUrl + "/feedback"
        )]))
})

bot.on(message('web_app_data'),async ctx =>{
const data = ctx.webAppData.data.json() 
ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()
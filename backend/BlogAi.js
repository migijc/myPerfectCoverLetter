require('dotenv').config()
const OpenAi= require('openai').OpenAI;

const openai = new OpenAi({
    apiKey:process.env.OPENAI_KEY
})


function createBlogPrompt(data){
    const date = new Date().toDateString()
    const prompt= `Hello, GPT! We're working on an engaging blog post for our Job Hunt Blog, and we'd like your assistance.
                    To create a structure, we'd like you to use ${data.title}  as the title and the following ${data.keyPoints} should be implemented.
                    Your task is to generate a blog post that's both informative and engaging.`
    return prompt
}

async function getChatCompletion(data){
    const prompt = createBlogPrompt(data)
    console.log(prompt)
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
    })
    return chatCompletion.choices[0].message.content
}



module.exports = {getChatCompletion}
require('dotenv').config()
const OpenAi= require('openai').OpenAI;

const openai = new OpenAi({
    apiKey:process.env.OPENAI_KEY
})

function createCoverLetterPrompt(data){
    const date = new Date().toDateString()
    const prompt= `Write the perfect cover letter for the applicant ${data.firstName} ${data.lastName} using no more than 400 words. They are applying for the role of ${data.jobRole} at ${data.company}. Make sure to include any of the following ${data.skills} to make this candidate stand out. The name of the hiring manager is ${data.hiringManager}. Avoid using placeholders where possible. Your response will be the cover letter content only starting with "Dear.."`
    return prompt
}

async function getChatCompletion(data){
    const prompt = createCoverLetterPrompt(data)
    console.log(prompt)
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
    })
    return chatCompletion.choices[0].message.content
}



module.exports = {getChatCompletion}


const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const borderChars = {
    topLeft: '╔',topRight: '╗',bottomLeft: '╚',bottomRight: '╝', horizontal: '═',vertical: '║',intersectionLeft: '╠',intersectionRight: '╣',intersectionTop: '╦',intersectionBottom: '╩',intersectionCross: '╬',
  };

async function main() {

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp_unix [DATE])]"},
      {role: "user",name:"[🌴.Groq]", content: "pour un cours plus dynamique nous intégrons intéraction des dial:[💬$messages] entre le role:user(moi-meme) et role:assistant,name:[📔.codex] posant des questions($?) afin de rendre le cours plus dynamique, en plus nous ajouterons des [🤖.emoji]!" },
      {role: "assistant",name:"[📔.codex]", content:"phase[01-2]:[RUN]:[projet]"},
      {role: "user",name:"[🌴.Groq]", content: `
      {
        "BootCamP": [
        {
        "description": "Apprendre les concepts de base de l'oganisation de _projets BOOTCAMPT avec les assistant GPT's",
        "details": [
        "Démarrer avec la compréhension des principes de l'ORGANISATION D'un proJet BOOTCAMP HACKATHONS",
        "Étudier la syntaxe, les types de données et les structures Projet"
        ]
        },
        {
        "description": "Étudier les exemple GPT pro_ org_",
        "details": [
        "Examiner des exemples existants",
        "Comprendre les fonctionnalités et la syntaxe week, week-end to bootCamp acme"
        ]
        },
        {
        "description": "Pratiquer la programmation",
        "details": [
        "Mettre en pratique les connaissances acquises",
        "Écrire les invites pour résoudre des problèmes ou réaliser des tâches spécifiques"
        ]
        },
        {
        "description": "Maîtriser les fonctionnalités avancées",
        "details": [
        "Explorer les fonctionnalités avancées de Grog",
        "Étudier les fonctions, les classes et les modules",
        "Créer des programmes plus complexes"
        ]
        },
        {
        "description": "Partager et recevoir des commentaires",
        "details": [
        "Partager votre code avec la communauté Grog",
        "Demander des commentaires et des conseils pour améliorer vos compétences et votre code"
        ]
        }
        ]
        }
      `},

      // trainning ascii interface response


    //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[dial:conversation(message/response)entre(user/assistant))]"},
    //  {
    //    "role": "system",
    //    "content": "[zira]"
    //  },
    //  {
    //    "role": "user",
    //    "content": "[content]:template.response"
    //  },
    //  {
    //    "role": "assistant",
    //    "content": "groq response"
    //  },
    //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[END]:[brainstorming(session.timestamp)]"},
    //  {role: "system",name:"[📔.codex]", content:"`systemContent` genetation de la documention et traduction de la documentation en lang:Fr, Français:stp!"},
    //  {role: "system",name:"[🌌.systemDream]", content:"groq"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "bootcamp_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();
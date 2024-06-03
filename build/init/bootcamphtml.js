const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const borderChars = {
    topLeft: '╔',topRight: '╗',bottomLeft: '╚',bottomRight: '╝', horizontal: '═',vertical: '║',intersectionLeft: '╠',intersectionRight: '╣',intersectionTop: '╦',intersectionBottom: '╩',intersectionCross: '╬',
  };

async function main() {

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp_unix [DATE])]"},
      {role: "user",name:"[🌴.Groq]", content: "Pour rendre nos intéractions plus dynamique nous intégrons intéraction des dial:[💬$messages] entre le role:user(moi-meme) et role:assistant,name:[📔.codex] posant des questions($?) afin de rendre le cours plus dynamique, en plus nous ajouterons des [🤖.emoji]!" },
      {role: "system",name:"[📔.codex]", content:"phase[01-2]:[RUN]:[inscription]"},
      {role: "assistant",name:"[✨.ia]", content: `
      
      {
        "$gameplay": [
        {
        "step": "Inscription",
        "description": "Les participants s'inscrivent au bootcamp en utilisant l'application Telegram et le bot MandatoryAI_Pibot pour vérifier leur identité et générer leur adresse de portefeuille GPT Wallet.",
        "tools": ["Telegram", "MandatoryAI_Pibot", "GPT Wallet"]
        },
        {
        "step": "Allocation Universel",
        "description": "Chaque participant reçoit un certain nombre de tokens umc.coin, qui peuvent être utilisés pour débloquer des niveaux de difficulté, déverrouiller des ressources et participer à des enchères pour gagner des drapeaux (tokens).",
        "tools": ["umc.coin"]
        },
        {
        "step": "Défis et ressources",
        "description": "Les participants doivent résoudre des défis basés sur la métaphysique, le calcul quantique, l'apprentissage automatique et les principes juridiques. Pour cela, ils doivent collecter des ressources documentaires et les convertir en formats lisibles par GPT en utilisant l'API Web3 et les bibliothèques groq-sdk.",
        "tools": ["API Web3", "groq-sdk"]
        },
        {
        "step": "Intégration des ressources",
        "description": "Une fois les ressources converties, les participants doivent intégrer ces ressources dans le gameplay en utilisant l'IA pour créer des questions, des tâches et des niveaux de difficulté variés.",
        "tools": ["IA"]
        },
        {
        "step": "Gestion des droits de propriété intellectuelle",
        "description": "Les participants doivent gérer leurs droits de propriété intellectuelle en suivant les principes du Code civil et les directives de la Commission nationale des comptes de campagne et des financements politiques, sous la supervision de l'IA.",
        "tools": ["Code civil", "Commission nationale des comptes de campagne et des financements politiques", "IA"]
        },
        {
        "step": "Évaluation et progression",
        "description": "L'IA évaluera constamment les performances des participants, générera de nouveaux drapeaux (tokens) et aidera les participants à progresser dans le jeu.",
        "tools": ["IA"]
        }
        ]
        }
        `},
      {role: "system",name:"[📔.codex]", content:"phase[01-3]:[RUN]:[projet]"},
      {role: "assistant",name:"[✨.ia]", content: `
      {
        "$bootCamp": [
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
        "Partager votre code avec la communauté Groq",
        "Demander des commentaires et des conseils pour améliorer vos compétences et votre code"
        ]
        }
        ]
        }
      `},

      // trainning ascii interface response


      {role: "user",name:"[🌴.Groq]", content:"Rédige-moi un howto ou guide d'étape optimisé avec le modèle de Gantes sur le $gameplay et l'organisation d'un projet $bootCamp avec gpt-wallet assistant openAI les smartContract umcTokens et les sCrypt de deFi.ico de la crypto umc.coin, si c'est ok ? T'es réponses devront être rédigé au format HTML traduit en lang:Fr Français section par section avec du web sementque W3C et le technique historique de l'IA archiviste https://archive.org , le plan de développement devra intégré les instructions notre code source groq-sdk"},
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
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "build/mdMessages_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();
const gameplay = [
    {
      step: 'Registration',
      description: 'Participants register for the bootcamp using the Telegram app and the MandatoryAI_Pibot for verification and generating their GPT Wallet addresses.',
      tools: ['Telegram', 'MandatoryAI_Pibot', 'GPT Wallet'],
    },
    {
      step: 'Token Allocation',
      description: 'Each participant receives umc.coin tokens, which can be used to unlock levels, access resources, and bid for flags (tokens) in auctions.',
      tools: ['umc.coin'],
    },
    {
      step: 'Challenges and Resources',
      description: 'Participants face challenges involving metaphysics, quantum computing, machine learning, and legal principles. To overcome them, participants collect and transform resource materials into GPT-compatible formats using web3 API and groq-sdk libraries.',
      tools: ['web3 API', 'groq-sdk'],
    },
    {
      step: 'Resource Integration',
      description: 'Upon converting resources, participants incorporate them into the gameplay using the AI to produce varied questions, tasks, and challenge levels.',
      tools: ['AI'],
    },
    {
      step: 'IP Rights Management',
      description: 'Participants handle their IP rights according to Civil Law codes and directions from national election fund commission bodies under the watchful eye of the AI.',
      tools: ['Civil Law', 'National Election Fund Commissions', 'AI'],
    },
  ];
  
  const roles = ['Mentor', 'Assistant'];
  const skills = [
    'OpenAI',
    'GPT Wallet',
    'Blockchain Development',
    'Smart Contracts (umcTokens.sol)',
    'Web3 API',
    'Legal Principles',
    'Intellectual Property Management',
    'Metaphysics',
    'Quantum Computing',
    'Machine Learning',
  ];
  const context = {
    participants:
      'Register using Telegram & MandatoryAI_Pibot, utilize allocated umc.coins, engage challenges, locate docs, alter forms with APIs, apply results thru AI, observe IP rules w/ AI support, conform to regs',
    ia: 'Monitor performance, distribute fresh flag tokens, encourage progress, maintain compliant atmosphere',
  };
  
  // Combine all data into one variable
  const jsData = {
    gameplay,
    roles,
    skills,
    context,
  };
  
  console.log(jsData);
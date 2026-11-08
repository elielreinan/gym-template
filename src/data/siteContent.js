export const WHATSAPP_URL = 'https://wa.me/message/WFJOLOJCSOQ7H1';
export const INSTAGRAM_URL = 'https://www.instagram.com/viverbem.fitness';
export const DEVELOPER_INSTAGRAM_URL = 'https://www.instagram.com/dev.reds/';
export const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Uruguai%2C%20Salvador%20-%20BA';

export const FACILITIES = [
  {
    title: 'Musculação',
    description: 'Área completa de pesos livres e máquinas de resistência.',
    icon: 'dumbbell',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=75&w=900&auto=format&fit=crop',
  },
  {
    title: 'Pilates',
    description: 'Estúdio exclusivo com fisioterapeutas dedicados ao seu bem-estar.',
    icon: 'spa',
    image:
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=75&w=900&auto=format&fit=crop',
  },
  {
    title: 'Aulas Coletivas',
    description: 'Salas amplas para dança, GAP, funcional e muito mais.',
    icon: 'users',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=75&w=900&auto=format&fit=crop',
  },
];

export const PLANS = [
  {
    name: 'Plano Mensal',
    description: 'Liberdade para treinar sem compromisso longo.',
    price: '149',
    features: [
      'Acesso livre à área de musculação',
      'Participação nas aulas coletivas',
      'Ambiente 100% climatizado',
    ],
    action: 'Consultar Mensal',
  },
  {
    name: 'Plano Semestral',
    description: 'A melhor escolha para quem foca em resultado.',
    price: '99',
    features: [
      'Tudo do plano mensal',
      'Acompanhamento Premium',
      'Sem taxa de matrícula',
      'Desconto exclusivo',
    ],
    action: 'Consultar Semestral',
    featured: true,
  },
  {
    name: 'Pilates 2X',
    description: '2 vezes na semana com fisioterapeutas.',
    price: '159',
    features: [
      'Aulas exclusivas de Pilates',
      'Atendimento personalizado',
      'BÔNUS: Acesso LIVRE à academia de musculação!',
    ],
    action: 'Consultar Pilates',
    badge: 'VIBE VIP',
  },
];

export const FAQS = [
  {
    question: 'Quais atividades a Viver Bem oferece?',
    answer:
      'A academia oferece musculação, Pilates com fisioterapeutas e aulas coletivas, como dança, GAP e funcional.',
  },
  {
    question: 'Como faço para me matricular?',
    answer:
      'Confira os planos disponíveis na seção Planos e escolha o que combina com você. Pelo botão do plano, você pode falar com a equipe no WhatsApp para iniciar a matrícula.',
  },
  {
    question: 'Como agendo uma aula de Pilates?',
    answer:
      'O plano Pilates 2X oferece duas aulas por semana com fisioterapeutas e inclui acesso à musculação. Para consultar disponibilidade e agendamento, entre em contato com a equipe.',
  },
  {
    question: 'Onde fica a academia?',
    answer:
      'Estamos no bairro do Uruguai, em Salvador - BA. O mapa do site mostra o bairro; confirme o endereço completo com a equipe antes de visitar.',
  },
  {
    question: 'Quais são os horários das aulas e de funcionamento?',
    answer:
      'Os horários atualizados ainda não estão disponíveis no site. Na seção Aulas e Horários, use o botão de consulta para verificar com a equipe os horários das atividades e de funcionamento.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer:
      'As formas de pagamento não estão informadas no site. Consulte a equipe para confirmar as opções aceitas e as condições do plano escolhido antes de se matricular.',
  },
];

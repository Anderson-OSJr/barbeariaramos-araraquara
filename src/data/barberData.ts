import { BarberService, BarberMaster, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: 'Barbearia Ramos',
  subname: 'Vila Harmonia · Araraquara',
  tagline: 'Ambiente Climatizado · Estilo & Experiência',
  address: 'Av. Queiroz Filho, 1180 - Vila Harmonia',
  city: 'Araraquara - SP',
  cep: '14802-610',
  phone: '(16) 99640-1178',
  phoneClean: '5516996401178',
  whatsappUrl: 'https://wa.me/5516996401178',
  instagram: 'barbeariaramos.araraquara',
  instagramUrl: 'https://www.instagram.com/barbeariaramos.araraquara/',
  logoUrl: '/images/real/logo_oficial.png',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.325375498877!2d-48.17240362378942!3d-21.787037780059345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3e580e07175%3A0xc316cf5a133d1b72!2sAv.%20Queiroz%20Filho%2C%201180%20-%20Vila%20Harmonia%2C%20Araraquara%20-%20SP%2C%2014802-610!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr',
  hours: [
    { days: 'Segunda a Quinta-feira', time: '09h00 às 20h00' },
    { days: 'Sexta-feira', time: '08h30 às 20h00' },
    { days: 'Sábado', time: '08h00 às 19h00' },
    { days: 'Domingo', time: 'Fechado' },
  ],
};

export const SERVICES: BarberService[] = [
  {
    id: 'combo-corte-barba',
    name: 'Corte & Barba Completo Ramos',
    category: 'combo',
    duration: '1h 00min',
    price: 140,
    description: 'Nossa experiência mais recomendada. Alinhamento completo com corte estruturado, visagismo facial, barboterapia com toalha aquecida e finalização impecável.',
    features: [
      'Corte personalizado com tesoura e máquina de precisão',
      'Barboterapia completa com toalha quente e navalha afiada',
      'Lavagem refrescante com massagem no couro cabeludo',
      'Finalização com pomada modeladora e óleo nutritivo de barba',
      'Lounge exclusivo com café espresso e bebidas geladas de cortesia'
    ],
    recommended: true,
  },
  {
    id: 'corte-social-fade',
    name: 'Corte Autoral com Visagismo',
    category: 'cabelo',
    duration: '35min',
    price: 70,
    description: 'Corte sob medida (fade, degradê navalhado, social clássico ou moderno texturizado) respeitando a anatomia do seu rosto e estilo de vida.',
    features: [
      'Consultoria de imagem e definição da linha do corte',
      'Técnicas de tesoura fio laser e navalha no pezinho',
      'Lavatório com shampoo energizante',
      'Acabamento matte natural'
    ],
  },
  {
    id: 'barboterapia-tradicional',
    name: 'Barboterapia & Toalha Quente',
    category: 'barba',
    duration: '35min',
    price: 70,
    description: 'Tratamento clássico para barba: toalha aquecida a vapor para abertura dos poros, óleos emolientes pré-barba, alinhamento milimétrico e loção pós-barba refrescante.',
    features: [
      'Toalha aquecida com fragrância relaxante',
      'Esfoliação suave e hidratação da pele',
      'Delineado na navalha sem irritação ou foliculite',
      'Bálsamo hidratante antifrizz'
    ],
  },
  {
    id: 'ritual-noivo-exclusive',
    name: 'Ritual Ramos Experience VIP',
    category: 'combo',
    duration: '1h 30min',
    price: 180,
    description: 'Para ocasiões especiais ou cavalheiros que desejam o mais alto nível de cuidado: Corte + Barba + Sobrancelha + Terapia Capilar Hidratante.',
    features: [
      'Corte autoral com consultoria completa de visagismo',
      'Barboterapia relaxante com vapor e toalha quente',
      'Design e limpeza milimétrica de sobrancelha',
      'Máscara revitalizante e hidratação profunda dos fios',
      'Acesso ao lounge com café especial e bebidas geladas'
    ],
  },
  {
    id: 'selagem-hidratacao',
    name: 'Alinhamento & Selagem Capilar',
    category: 'terapia',
    duration: '50min',
    price: 120,
    description: 'Redução de volume e controle de frizz para cabelos rebeldes, proporcionando praticidade diária e acabamento disciplinado com aspecto natural.',
    features: [
      'Tratamento termoativado sem formol',
      'Nutrição intensiva com aminoácidos e queratina',
      'Brilho e maciez duradouros (até 60 dias)',
      'Lavagem especial e secagem com escova modeladora'
    ],
  },
  {
    id: 'corte-infantil',
    name: 'Corte Kids & Juvenil',
    category: 'cabelo',
    duration: '30min',
    price: 70,
    description: 'Atendimento paciente e cuidadoso em ambiente acolhedor, garantindo um visual moderno e estiloso para os pequenos com máxima segurança.',
    features: [
      'Ambiente descontraído e seguro',
      'Profissionais especializados no público infantil',
      'Penteado divertido e finalização com pomada leve'
    ],
  },
];

export const BARBERS: BarberMaster[] = [
  {
    id: 'equipe-ramos',
    name: 'Marcos Ramos & Equipe',
    title: 'Master Barbers Especialistas',
    specialty: 'Cortes com Visagismo, Fade & Barboterapia',
    experience: 'Mais de uma década de tradição e inovação em Araraquara',
  },
  {
    id: 'especialista-barba',
    name: 'Especialista em Barboterapia',
    title: 'Senior Barber',
    specialty: 'Alinhamento na Navalha & Toalha a Vapor',
    experience: 'Técnica refinada em desenho de barba e cuidados com a pele',
  },
  {
    id: 'especialista-corte',
    name: 'Especialista em Degradê & Tesoura',
    title: 'Style Consultant',
    specialty: 'Cortes Clássicos, Degradê Navalhado & Estilização',
    experience: 'Precisão milimétrica e consultoria de estilo masculino',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Felipe Santoro',
    role: 'Cliente Frequente · Vila Harmonia',
    text: 'A Barbearia Ramos tem um ambiente espetacular! Super clara, limpa, bem iluminada e com espaço amplo. O café enquanto esperamos é ótimo e o corte é impecável.',
    service: 'Corte & Barba Completo Ramos',
  },
  {
    id: 't2',
    name: 'Rodrigo Nogueira',
    role: 'Engenheiro Civil · Araraquara',
    text: 'Melhor barbearia de Araraquara. Pontualidade de verdade, sem atrasos. A barboterapia com toalha quente é muito relaxante e a equipe toda é nota 10.',
    service: 'Barboterapia & Toalha Quente',
  },
  {
    id: 't3',
    name: 'Marcelo Castro',
    role: 'Empresário',
    text: 'Lugar diferenciado na Vila Harmonia. O azul e branco da marca dá um visual moderno e limpo. Corte no degradê sempre alinhado com perfeição.',
    service: 'Corte Autoral com Visagismo',
  },
];

export const FAQS = [
  {
    question: 'Como funciona o agendamento de horários?',
    answer: 'Você pode escolher seu serviço e data diretamente pelo nosso sistema online nesta página, ou enviar uma mensagem rápida em nosso WhatsApp oficial (16) 99640-1178. Seu horário fica reservado sem filas.',
  },
  {
    question: 'O que a Barbearia Ramos oferece no ambiente?',
    answer: 'Nosso espaço na Vila Harmonia é amplo, climatizado e moderno, contando com lounge com sofá Chesterfield, Wi-Fi veloz, café espresso, frigobar com bebidas e poltronas confortáveis para você relaxar.',
  },
  {
    question: 'Vocês atendem por ordem de chegada ou apenas com hora marcada?',
    answer: 'Priorizamos o atendimento com hora marcada para garantir que cada cliente tenha a dedicação exclusiva do barbeiro e sem tempo de espera desnecessário. Havendo vaga pontual no dia, também atendemos.',
  },
  {
    question: 'Onde fica a barbearia e tem estacionamento?',
    answer: 'Estamos na Avenida Queiroz Filho, 1180, em ponto nobre e seguro da Vila Harmonia em Araraquara, com facilidade para estacionar com tranquilidade em frente ao estabelecimento.',
  },
  {
    question: 'Quais as formas de pagamento disponíveis?',
    answer: 'Aceitamos cartões de crédito e débito, Pix instantâneo e dinheiro em espécie.',
  },
];

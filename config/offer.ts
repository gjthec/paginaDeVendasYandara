
export interface Instructor {
  name: string;
  tagline: string;
  bio: string;
  instagramUrl: string;
  supportChannelUrl: string;
  photoUrl: string;
}

export interface OfferConfig {
  purchaseLink: string;
  whatsappLink: string;
  priceBRL: string;
  originalPriceBRL: string;
  paymentMethods: string;
  datesAndSpots: string;
  guaranteePolicy: string;
  timePerWeekText: string;
  accessDurationText: string;
  sessionFormatText: string;
  postPurchaseStepsText: string;
  instructor: Instructor;
}

export const offer: OfferConfig = {
  purchaseLink: "https://pay.kiwify.com.br/jkzXxID",
  whatsappLink: "https://wa.me/5521975316141",
  priceBRL: "198,00",
  originalPriceBRL: "480,00",
  paymentMethods: "Pix ou Cartão de Crédito",
  datesAndSpots: "Turma com início imediato • Vagas Limitadas",
  guaranteePolicy: "7 dias de garantia incondicional",
  timePerWeekText: "Cerca de 60 a 90 minutos por semana, adaptáveis ao seu ritmo.",
  accessDurationText: "Acesso por 12 meses a todo o conteúdo gravado.",
  sessionFormatText: "Sessões individuais de 50 minutos realizadas via Google Meet.",
  postPurchaseStepsText: "Você receberá um e-mail com acesso à plataforma, o calendário de encontros e o link para agendamento dos bônus.",
  instructor: {
    name: "YANDARA MALUNGO",
    tagline: "Psicanalista, estudante e pesquisadora em Fenomenologia Existencial.",
    bio: "Mas antes de qualquer título, sou uma pessoa que acredita que sentir é um ato de coragem. Criei o Sentir é Particular porque também já me vi perdida entre tarefas, expectativas e tentativas de dar conta de tudo — enquanto, por dentro, algo pedia pausa, escuta e verdade.",
    instagramUrl: "https://instagram.com/yandaramalungo",
    supportChannelUrl: "https://wa.me/5521975316141",
    photoUrl: "/IMG_4742.jpeg"
  }
};

export const formatValue = (val: string) => val || "(preencha aqui)";

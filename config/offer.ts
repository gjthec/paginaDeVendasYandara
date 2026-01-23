
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
  purchaseLink: "https://pay.kiwify.com.br/jkzXxID", // Link do checkout atualizado
  whatsappLink: "https://wa.me/5521975316141",
  priceBRL: "198,00",
  paymentMethods: "Pix ou Cartão de Crédito",
  datesAndSpots: "Turma com início imediato • Vagas Limitadas",
  guaranteePolicy: "7 dias de garantia incondicional",
  timePerWeekText: "Cerca de 60 a 90 minutos por semana, adaptáveis ao seu ritmo.",
  accessDurationText: "Acesso por 12 meses a todo o conteúdo gravado.",
  sessionFormatText: "Sessões individuais de 50 minutos realizadas via Google Meet.",
  postPurchaseStepsText: "Você receberá um e-mail com acesso à plataforma, o calendário de encontros e o link para agendamento dos bônus.",
  instructor: {
    name: "Seu Nome Aqui",
    tagline: "Condução leve, prática e humana",
    bio: "Especialista em processos de autoconhecimento e organização interna. Criei o Mapeamento do Sentir para ajudar pessoas que, assim como eu, já se sentiram perdidas no próprio cansaço e precisavam de um caminho seguro para voltar ao eixo.",
    instagramUrl: "https://instagram.com/seuusuario",
    supportChannelUrl: "https://t.me/seuchannel",
    photoUrl: "https://picsum.photos/seed/instructor/400/400"
  }
};

export const formatValue = (val: string) => val || "(preencha aqui)";

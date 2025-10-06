"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Santos",
    revenue: "R$8.500/mês",
    initial: "M",
    gradient: "from-green-400 to-emerald-500",
    border: "border-green-500/20 hover:border-green-500/40",
    testimonial: "Eu estava desesperada ganhando R$1.200 como faxineira. Em 60 dias aplicando o método, já estava faturando R$8.500! Minha vida mudou completamente. Agora trabalho de casa e tenho tempo para meus filhos."
  },
  {
    name: "João Pedro",
    revenue: "R$12.000/mês",
    initial: "J",
    gradient: "from-blue-400 to-cyan-500",
    border: "border-blue-500/20 hover:border-blue-500/40",
    testimonial: "Trabalhava 12h por dia como motorista de app por R$2.000/mês. Hoje faturo R$12k trabalhando 4h/dia de casa. Nunca pensei que fosse possível. O método é revolucionário!"
  },
  {
    name: "Ana Lucia",
    revenue: "R$15.000/mês",
    initial: "A",
    gradient: "from-purple-400 to-pink-500",
    border: "border-purple-500/20 hover:border-purple-500/40",
    testimonial: "Era vendedora em loja ganhando salário mínimo. Hoje tenho liberdade total! Trabalho quando quero, viajo quando quero. Faturei R$15k no último mês sem aparecer!"
  }
]

const communityStats = [
  { value: "2.847", label: "Pessoas Libertas", color: "text-green-400" },
  { value: "R$847M", label: "Faturamento Total", color: "text-blue-400" },
  { value: "98%", label: "Taxa de Sucesso", color: "text-purple-400" },
  { value: "4.9★", label: "Avaliação Média", color: "text-yellow-400" }
]

export default function SocialProof() {
  return (
    <section className="bg-slate-800/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Veja Quem Já Está <span className="text-green-400">Vivendo a Liberdade</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Pessoas reais, resultados reais, transformações reais
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-slate-800/50 p-6 rounded-2xl ${testimonial.border} transition-all duration-300`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-green-400 text-sm font-bold">{testimonial.revenue}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "{testimonial.testimonial}"
                </p>
                <div className="text-green-400 text-xs font-semibold">
                  ✅ RESULTADO VERIFICADO
                </div>
              </div>
            ))}
          </div>

          {/* Community Stats */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">
                Faça Parte da Maior Comunidade de Liberdade Financeira do Brasil
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
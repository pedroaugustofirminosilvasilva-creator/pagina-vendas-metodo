"use client"

import { ArrowRight } from "lucide-react"

const painPoints = [
  {
    icon: "💸",
    title: "Salário que não cobre nem o básico",
    description: "Conta no vermelho todo mês, sem dinheiro para emergências ou lazer"
  },
  {
    icon: "😰",
    title: "Medo constante de ser demitido",
    description: "Insegurança que não te deixa dormir, sempre com medo do próximo corte"
  },
  {
    icon: "⏰",
    title: "Sem tempo para família",
    description: "Trabalha tanto que perdeu momentos importantes com quem ama"
  },
  {
    icon: "🔒",
    title: "Preso em um emprego que odeia",
    description: "Acorda todo dia sem vontade, fazendo algo que não te realiza"
  },
  {
    icon: "📈",
    title: "Sonhos engavetados",
    description: "Sempre adiando planos por falta de dinheiro e tempo"
  },
  {
    icon: "😔",
    title: "Autoestima no chão",
    description: "Se sente fracassado, sem perspectiva de melhora"
  }
]

export default function PainPoints() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Você Está <span className="text-red-400">Cansado</span> Disso?
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Se você se identifica com pelo menos 3 situações abaixo, esta apresentação vai mudar sua vida
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl hover:border-red-500/40 transition-all duration-300">
                <div className="text-3xl">{pain.icon}</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{pain.title}</h3>
                  <p className="text-gray-400 text-sm">{pain.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl p-8 border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                🚨 PARE DE SOFRER! Existe uma Saída...
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                E se eu te dissesse que <strong className="text-green-400">MILHARES de pessoas</strong> 
                já saíram dessa situação usando um método <strong className="text-yellow-400">simples e comprovado?</strong>
              </p>
              <a 
                href="https://kiwify.app/L8IfZMy?afid=uwDMdS5O" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                🎯 VER A SOLUÇÃO NA APRESENTAÇÃO
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
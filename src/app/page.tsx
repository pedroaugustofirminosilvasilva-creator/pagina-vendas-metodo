"use client"

import { Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Hero from "@/components/sales/Hero"
import PainPoints from "@/components/sales/PainPoints"
import SocialProof from "@/components/sales/SocialProof"
import Urgency from "@/components/sales/Urgency"
import FloatingComments from "@/components/sales/FloatingComments"
import { salesConfig, copywriting } from "@/lib/sales-config"

export default function VSLPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating Comments System */}
      <FloatingComments />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Liberdade<span className="text-purple-400">Digital</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-green-400 font-semibold">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            🔴 AO VIVO: 1.247 pessoas assistindo
          </div>
        </div>
      </header>

      {/* ETAPA 1: ATENÇÃO - Hero Section com VSL */}
      <Hero />

      {/* ETAPA 1: ATENÇÃO - Identificação do Problema */}
      <PainPoints />

      {/* ETAPA 2: DESEJO - Prova Social com Resultados */}
      <SocialProof />

      {/* ETAPA 2: DESEJO - Simplicidade do Método */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Por Que Este Método é <span className="text-green-400">Tão Simples?</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">Passo a Passo</h3>
                <p className="text-gray-400">
                  Método dividido em etapas simples que qualquer pessoa pode seguir, 
                  mesmo sem experiência
                </p>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-bold text-white mb-4">Sem Aparecer</h3>
                <p className="text-gray-400">
                  Trabalhe completamente nos bastidores, sem precisar mostrar o rosto 
                  ou criar conteúdo pessoal
                </p>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4">Resultados Rápidos</h3>
                <p className="text-gray-400">
                  Primeiros resultados em 30 dias, faturamento consistente em 90 dias. 
                  Sem enrolação!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                💡 "Se Fosse Complicado, {salesConfig.communitySize.toLocaleString()} Pessoas Não Teriam Conseguido"
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                O segredo está na <strong className="text-green-400">simplicidade</strong>. 
                Quanto mais simples, mais pessoas conseguem replicar e ter sucesso.
              </p>
              <a 
                href={salesConfig.affiliateLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                ✨ DESCOBRIR O MÉTODO COMPLETO
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ETAPA 2: DESEJO - Autoridade */}
      <section className="bg-slate-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Quem Está Por Trás Desta <span className="text-purple-400">Revolução?</span>
            </h2>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-8 border border-purple-500/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  👨‍💼
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    O Mentor que Já Libertou +{salesConfig.communitySize.toLocaleString()} Pessoas
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>7 anos dominando o mercado digital</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Mais de R$50 milhões gerados pelos alunos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Método testado e aprovado por milhares</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Especialista em negócios "invisíveis"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ETAPA 3: AÇÃO - Escassez e Urgência */}
      <Urgency />

      {/* ETAPA 3: AÇÃO - CTA Final Poderoso */}
      <section className="bg-gradient-to-br from-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sua Transformação Começa <span className="text-green-400">AGORA</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Não deixe mais um dia passar vivendo no limite. Milhares já mudaram de vida. 
              <strong className="text-yellow-400"> Sua vez chegou!</strong>
            </p>

            <div className="bg-slate-900/50 p-8 rounded-3xl border border-green-500/30 mb-8">
              <div className="text-red-400 font-bold text-lg mb-4">
                ⚠️ ÚLTIMA CHANCE - Esta apresentação sai do ar em breve!
              </div>
              <div className="text-gray-300 mb-6">
                Não perca a oportunidade de descobrir o método que está transformando vidas. 
                Clique agora e assista à apresentação completa onde você vai descobrir:
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-left text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>O método exato passo a passo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Como começar sem investir nada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Estratégias para não aparecer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Como escalar para R$10k/mês</span>
                </div>
              </div>
            </div>

            <a 
              href={salesConfig.affiliateLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl mb-8 animate-pulse"
            >
              🎯 QUERO MINHA LIBERDADE AGORA
              <ArrowRight className="w-6 h-6" />
            </a>

            <div className="text-gray-400 text-sm">
              🔒 Acesso 100% gratuito • ⚡ Disponível por tempo limitado • 🎯 Conteúdo exclusivo
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-gray-400 text-sm">
            © 2024 LiberdadeDigital. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
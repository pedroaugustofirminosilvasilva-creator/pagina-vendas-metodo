"use client"

import { Play, Star, Clock, Eye, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-3 rounded-2xl mb-8 animate-pulse">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-bold">ATENÇÃO: Esta apresentação sai do ar em 24h!</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-6">
            <Star className="w-4 h-4 fill-current" />
            +2.847 pessoas já saíram do CLT com este método
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="text-red-400">PARE de Viver no Salário Mínimo!</span><br />
            Descubra Como Faturar até
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              {" "}R$10.000/mês
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <strong className="text-yellow-400">REVELAÇÃO EXCLUSIVA:</strong> O método simples que está 
            <strong className="text-white"> libertando milhares de pessoas</strong> da escravidão do CLT, 
            <strong className="text-green-400"> sem aparecer</strong> e sem depender de patrão
          </p>
        </div>

        {/* VSL Video Section */}
        <div className="relative mb-8">
          <div className="bg-black rounded-3xl p-4 shadow-2xl border-4 border-purple-500/30">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center group cursor-pointer hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl"></div>
              
              {/* Play Button */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 animate-pulse">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 fill-current" />
                </div>
                <div className="text-white font-bold text-lg md:text-xl mt-4">
                  ▶️ ASSISTA À APRESENTAÇÃO EXCLUSIVA
                </div>
                <div className="text-gray-300 text-sm mt-2">
                  ⏱️ Duração: 47 minutos • 🎯 Método completo revelado
                </div>
              </div>

              {/* Live Indicator */}
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                AO VIVO
              </div>

              {/* Viewer Count */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Eye className="w-4 h-4" />
                1.247 assistindo
              </div>
            </div>
          </div>
        </div>

        {/* CTA Principal */}
        <div className="text-center">
          <a 
            href="https://kiwify.app/L8IfZMy?afid=uwDMdS5O" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl mb-4"
          >
            🚀 ASSISTIR APRESENTAÇÃO COMPLETA AGORA
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="text-gray-400 text-sm">
            ⚡ Acesso liberado por tempo limitado • 🔒 100% gratuito
          </div>
        </div>
      </div>
    </section>
  )
}
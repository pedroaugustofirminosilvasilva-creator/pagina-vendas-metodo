"use client"

import { Clock, ArrowRight, CheckCircle } from "lucide-react"

export default function Urgency() {
  return (
    <section className="bg-gradient-to-r from-red-600/20 to-orange-600/20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-red-400 mb-6">
            <Clock className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-bold">ATENÇÃO: ACESSO LIMITADO</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Esta Apresentação Sai do Ar em <span className="text-red-400">24 Horas!</span>
          </h2>
          
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-red-500/30 mb-8">
            <p className="text-lg text-gray-300 mb-6">
              Por questões de <strong className="text-yellow-400">exclusividade</strong> e para manter a 
              <strong className="text-green-400"> qualidade da comunidade</strong>, esta apresentação 
              fica disponível apenas por tempo limitado.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-red-600/20 p-4 rounded-xl border border-red-500/30">
                <div className="text-2xl font-bold text-white">23</div>
                <div className="text-red-400 text-sm">Horas</div>
              </div>
              <div className="bg-red-600/20 p-4 rounded-xl border border-red-500/30">
                <div className="text-2xl font-bold text-white">47</div>
                <div className="text-red-400 text-sm">Minutos</div>
              </div>
              <div className="bg-red-600/20 p-4 rounded-xl border border-red-500/30">
                <div className="text-2xl font-bold text-white">32</div>
                <div className="text-red-400 text-sm">Segundos</div>
              </div>
              <div className="bg-red-600/20 p-4 rounded-xl border border-red-500/30">
                <div className="text-2xl font-bold text-white">🔥</div>
                <div className="text-red-400 text-sm">Urgente</div>
              </div>
            </div>

            <div className="text-yellow-400 font-semibold mb-6">
              ⚠️ Após esse prazo, você terá que aguardar 6 meses para uma nova oportunidade
            </div>
          </div>

          <a 
            href="https://kiwify.app/L8IfZMy?afid=uwDMdS5O" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl animate-pulse"
          >
            🚨 ASSISTIR ANTES QUE SAIA DO AR
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
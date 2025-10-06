"use client"

import { useState, useEffect } from "react"

const comments = [
  { name: "Carlos M.", message: "Acabei de assistir! Método incrível 🔥", time: "agora" },
  { name: "Ana P.", message: "Já estou aplicando e vendo resultados!", time: "2 min" },
  { name: "Roberto S.", message: "Finalmente algo que funciona de verdade", time: "3 min" },
  { name: "Mariana L.", message: "Minha vida mudou com esse método ❤️", time: "5 min" },
  { name: "Pedro H.", message: "R$3.500 no primeiro mês! Obrigado!", time: "7 min" },
  { name: "Julia R.", message: "Simples demais! Por que ninguém ensina isso?", time: "8 min" },
  { name: "Fernando K.", message: "Saí do CLT graças a essa apresentação", time: "10 min" },
  { name: "Camila T.", message: "Método revolucionário! Recomendo 100%", time: "12 min" }
]

export default function FloatingComments() {
  const [visibleComments, setVisibleComments] = useState<number[]>([])

  useEffect(() => {
    const showComment = () => {
      const randomIndex = Math.floor(Math.random() * comments.length)
      
      setVisibleComments(prev => [...prev, randomIndex])
      
      // Remove comment after 4 seconds
      setTimeout(() => {
        setVisibleComments(prev => prev.filter(index => index !== randomIndex))
      }, 4000)
    }

    // Show first comment after 2 seconds
    const initialTimeout = setTimeout(showComment, 2000)
    
    // Then show comments every 3-6 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.3) { // 70% chance to show a comment
        showComment()
      }
    }, Math.random() * 3000 + 3000) // Random between 3-6 seconds

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {visibleComments.map((commentIndex, index) => {
        const comment = comments[commentIndex]
        const side = Math.random() > 0.5 ? 'left' : 'right'
        const topPosition = Math.random() * 60 + 20 // Between 20% and 80% from top
        
        return (
          <div
            key={`${commentIndex}-${index}`}
            className={`absolute animate-fade-in-out ${
              side === 'left' ? 'left-4' : 'right-4'
            }`}
            style={{ top: `${topPosition}%` }}
          >
            <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-gray-200 max-w-xs ${
              side === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
            }`}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {comment.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-900 font-semibold text-sm truncate">
                      {comment.name}
                    </span>
                    <span className="text-gray-500 text-xs flex-shrink-0">
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-tight">
                    {comment.message}
                  </p>
                </div>
              </div>
              
              {/* Speech bubble arrow */}
              <div className={`absolute top-4 w-0 h-0 ${
                side === 'left' 
                  ? '-left-2 border-r-8 border-r-white/95 border-t-4 border-b-4 border-t-transparent border-b-transparent'
                  : '-right-2 border-l-8 border-l-white/95 border-t-4 border-b-4 border-t-transparent border-b-transparent'
              }`}></div>
            </div>
          </div>
        )
      })}
      
      <style jsx>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        
        @keyframes slide-in-left {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-fade-in-out {
          animation: fade-in-out 4s ease-in-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
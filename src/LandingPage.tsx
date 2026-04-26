import { Lock, EyeOff, Smartphone, Timer, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#ff007f] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#7f00ff] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
      
      {/* Abstract Grid/Texture (Optional) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-lg w-full px-6 py-12 flex flex-col items-center">
        
        {/* Creator Photo Container */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ff007f] to-[#7f00ff] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center justify-center">
            <img 
              src="/creator.jpg" 
              alt="Creator" 
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border-2 border-white/10 shadow-2xl"
              onError={(e) => {
                // Fallback se a imagem não for encontrada
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Top Badge */}
        <div className="flex items-center gap-2 bg-[#ff007f]/20 border border-[#ff007f]/50 px-4 py-1.5 rounded-full mb-8">
          <Lock className="w-4 h-4 text-[#ff007f]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff007f]">Acesso Restrito 🔞</span>
        </div>

        {/* Headlines */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 leading-tight tracking-tight">
          O Instagram não me deixa te mostrar isso... <span className="inline-block animate-bounce">😈</span>
        </h1>
        
        <p className="text-gray-400 text-center text-lg mb-10 leading-relaxed px-2">
          A versão que os algoritmos bloqueiam, agora liberada só para quem estiver no lugar certo. Sem filtros, sem censura e entregue direto no seu celular.
        </p>

        {/* Features Glass Card */}
        <div className="glass w-full rounded-2xl p-6 mb-10 flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <div className="bg-[#ff007f]/20 p-2 rounded-lg mt-1">
              <EyeOff className="w-5 h-5 text-[#ff007f]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Acesso Secreto</h3>
              <p className="text-gray-400 text-sm">O que eu só tenho coragem de mandar no privado.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-[#ff007f]/20 p-2 rounded-lg mt-1">
              <span className="text-lg leading-none block pt-0.5 text-[#ff007f]">💦</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Sem Limites</h3>
              <p className="text-gray-400 text-sm">Conteúdo cru que seria banido em qualquer outra rede.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#ff007f]/20 p-2 rounded-lg mt-1">
              <Smartphone className="w-5 h-5 text-[#ff007f]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Direto na Fonte</h3>
              <p className="text-gray-400 text-sm">Receba tudo em primeira mão, sem depender de algoritmos.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#ff007f]/20 p-2 rounded-lg mt-1">
              <Timer className="w-5 h-5 text-[#ff007f]" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Vagas Limitadas</h3>
              <p className="text-gray-400 text-sm">Eu não deixo as portas abertas por muito tempo.</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://t.me/esterjob_bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative w-full flex items-center justify-center gap-2 bg-[#ff007f] hover:bg-[#e60073] text-white text-lg font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 animate-pulse-glow"
        >
          <span>Quero ver o que está escondido 👀</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Footer Text */}
        <p className="text-gray-500 text-xs text-center mt-6 max-w-xs">
          *O acesso ao bot do Telegram pode ser encerrado a qualquer momento. Se esta página sair do ar, você perdeu sua chance.
        </p>

      </div>
    </div>
  );
}

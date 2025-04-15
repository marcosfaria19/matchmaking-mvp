import MatchmakingSystem from "@/components/matchmaking-system";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-pattern py-6 px-4 md:py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-accent shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-gray-700">Match AI</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3">
            Encontre seu <span className="gradient-text">Match Perfeito</span>
          </h1>
          <p className="text-gray-600 max-w-md md:max-w-lg mx-auto px-2 md:px-0">
            Nossa IA conecta você com pessoas incríveis com base em seus
            interesses e localização
          </p>
        </header>

        <MatchmakingSystem />
      </div>
    </main>
  );
}

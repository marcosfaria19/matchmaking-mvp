"use client";

import { Button } from "@/components/ui/button";
import type { Match } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";

interface MatchResultsProps {
  matches: Match[];
  userData: {
    name: string;
    interest: string;
    location: string;
  };
  onReset: () => void;
}

export default function MatchResults({
  matches,
  userData,
  onReset,
}: MatchResultsProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-slate-800">
          Deu Match!
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="flex items-center text-sm"
        >
          <ArrowLeft className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
          Voltar
        </Button>
      </div>

      <div className="mb-4 md:mb-6 p-3 md:p-4 bg-slate-50 rounded-md md:rounded-lg">
        <p className="text-sm md:text-sm text-slate-600 leading-relaxed">
          Baseado em seus interesses em{" "}
          <span className="font-medium">{userData.interest}</span> e localização{" "}
          <span className="font-medium">{userData.location}</span>
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {matches.map((match, index) => (
          <MatchCard key={match.id} match={match} index={index} />
        ))}
      </div>
    </div>
  );
}

function MatchCard({ match, index }: { match: Match; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border rounded-md md:rounded-lg p-3 md:p-4 hover:shadow-sm md:hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-base md:text-lg">{match.name}</h3>
          <p className="text-slate-600 mt-1 text-sm md:text-base">
            {match.description}
          </p>
        </div>
        <div className="flex items-center bg-slate-100 px-2 py-0.5 md:px-3 md:py-1 rounded-full">
          <Heart className="h-3 w-3 md:h-4 md:w-4 text-rose-500 mr-1" />
          <span className="font-medium text-sm md:text-base">
            {match.affinityLevel}%
          </span>
        </div>
      </div>

      <div className="mt-2 md:mt-3 flex flex-wrap gap-1 md:gap-2">
        {match.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-100 text-slate-700 text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

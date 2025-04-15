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
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Your Matches</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="mb-6 p-4 bg-slate-50 rounded-lg">
        <p className="text-sm text-slate-600">
          Based on your interest in{" "}
          <span className="font-medium">{userData.interest}</span> and location{" "}
          <span className="font-medium">{userData.location}</span>
        </p>
      </div>

      <div className="space-y-6">
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
      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg">{match.name}</h3>
          <p className="text-slate-600 mt-1">{match.description}</p>
        </div>
        <div className="flex items-center bg-slate-100 px-3 py-1 rounded-full">
          <Heart className="h-4 w-4 text-rose-500 mr-1" />
          <span className="font-medium">{match.affinityLevel}%</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {match.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

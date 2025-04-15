"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatchForm from "./match-form";
import MatchResults from "./match-results";
import { findMatches } from "@/lib/mock-data";
import type { Match } from "@/lib/types";

export default function MatchmakingSystem() {
  const [matches, setMatches] = useState<Match[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    interest: "",
    location: "",
  });

  const handleSubmit = async (data: {
    name: string;
    interest: string;
    location: string;
  }) => {
    setFormData(data);
    setIsLoading(true);

    // Simula delay da chamada a API
    setTimeout(() => {
      const results = findMatches(data);
      setMatches(results);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setMatches(null);
  };

  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-16 h-16 md:w-24 md:h-24 bg-accent/10 rounded-full blur-xl md:blur-2xl"></div>
      <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-20 h-20 md:w-32 md:h-32 bg-primary/10 rounded-full blur-xl md:blur-2xl"></div>

      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden border border-border">
        <AnimatePresence mode="wait">
          {!matches ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MatchForm onSubmit={handleSubmit} isLoading={isLoading} />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MatchResults
                matches={matches}
                userData={formData}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

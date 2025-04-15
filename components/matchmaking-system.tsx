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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
  );
}

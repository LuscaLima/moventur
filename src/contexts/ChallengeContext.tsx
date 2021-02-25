import { createContext, ReactNode, useState } from "react";

// Props definition
type ChallengesProviderProps = {
  children: ReactNode;
};

// Interfaces
interface IChallengeContext {
  level: number;
  currentExperience: number;
  completedChallenges: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengeContext = createContext({} as IChallengeContext);

export default function ChallengesProvider({
  children,
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);

  // Increases the level
  function levelUp() {
    setLevel(level + 1);
  }

  // Starts a new challenge
  function startNewChallenge() {
    console.log("novo desafio");
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        completedChallenges,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}

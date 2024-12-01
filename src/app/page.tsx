'use client';

import { useState } from "react";
import { GameArea } from "@/ui/GameArea";
import { attackHero, attackMonster, grantLoots } from "@/utils/combat";
import {NavBar} from "@/ui/NavBar";
import { heroes, monsters } from "@/utils/Data";
import  Footer  from "@/ui/Footer";
import "tailwindcss/tailwind.css";

export default function Home() {
  const [logs, setLogs] = useState<string[]>([]);
  const [availableLoots, setAvailableLoots] = useState<string[]>([
    "Espada mágica",
    "Anillo de invisibilidad",
    "Escudo legendario",
  ]);

  const startBattle = () => {
    const logsTemp: string[] = [];
  

    const hero = heroes[Math.floor(Math.random() * heroes.length)];
    const monster = monsters[Math.floor(Math.random() * monsters.length)];

    const heroAttack = attackHero(hero, monster);
    logsTemp.push(heroAttack.log);

    if (monster.life > 0) {
      const monsterAttack = attackMonster(monster, hero);
      logsTemp.push(monsterAttack.log);
    } else {
      const lootResult = grantLoots(availableLoots, logsTemp);
      logsTemp.push(lootResult.log);
      setAvailableLoots(lootResult.availableLoots);
    }

    setLogs(logsTemp);
  };

  return (
    <div>
      <NavBar startBattle={startBattle} />
      {/* <button onClick={startBattle}>Iniciar Batalla</button> */}
      <GameArea logs={logs} />
      <Footer />
    </div>
  );
}

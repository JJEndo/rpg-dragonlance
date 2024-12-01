import { restoreLife } from "@/utils/Combat";
import { useState } from "react";
import Image from "next/image";
import { heroes, monsters } from "@/utils/Data";


export const GameArea = ({ logs }: { logs: string[] }) => {

  const [heroList] = useState(heroes); // Usamos heroes desde data.ts
  const [monsterList] = useState(monsters); // Usamos monsters desde data.ts


  const handleRestoreLife = () => {
    restoreLife(heroes, monsters);
    heroes.forEach((hero) => {
      hero.life = hero.maxLife; 
    });

    monsters.forEach((monster) => {
      monster.life = monster.maxLife;
    });
  };


  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="absolute w-full h-full bg-cover bg-[url('/background.jpg')] animate-scroll">
        <div className="flex justify-around items-center h-full relative z-10">
          {/* Héroes */}
          {heroList.map((hero) => (
            <div key={hero.name} className="text-center relative w-[200px] h-[200px]">
              <Image
                src={`/heroes/${hero.name}.jpg`}
                alt={hero.name}
                fill
              />
              <p className="text-white">{hero.name}</p>
            </div>
          ))}

          {/* Monstruos */}
          {monsterList.map((monster) => (
            <div key={monster.name} className="text-center relative w-[200px] h-[200px]">
              <Image
                src={`/monsters/${monster.name}.png`}
                alt={monster.name}
                fill
                className="object-cover"
              />
              <p className="text-red-400">{monster.name}</p>
            </div>
          ))}
        </div>

        {/* Botón para restaurar vidas */}
        <div className="text-center mt-4">
          <button
            onClick={handleRestoreLife}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Restaurar Vidas
          </button>
        </div>

        {/* Logs */}
        <div className="text-white overflow-y-auto max-h-[200px] w-full bg-gray-900 p-4 rounded mt-4">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

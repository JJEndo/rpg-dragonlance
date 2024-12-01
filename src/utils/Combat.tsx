import { Heroes, Monsters } from "./Types";

export const restoreLife = (heroes: Heroes[], monsters: Monsters[]) => {
  heroes.forEach((hero) => {
    hero.life = hero.maxLife; 
  });

  monsters.forEach((monster) => {
    monster.life = monster.maxLife;
  });
};

export const attackHero = (hero: Heroes, monster: Monsters) => {
  const weaponChoice =
    Math.random() > 0.5 ? hero.equipment.mainHand : hero.equipment.secondaryHand;
  const damageHero = hero.attack + weaponChoice.bonus - monster.defense;
  const realDamageHero = Math.max(0, damageHero);
  monster.life -= realDamageHero;

  return {
    log: `${hero.name} ataca a ${monster.name} con ${weaponChoice.name} y le hace ${realDamageHero} puntos de daño.`,
  };
};

export const attackMonster = (monster: Monsters, hero: Heroes) => {
  const damageMonster = monster.attack - hero.defense;
  const realDamageMonster = Math.max(0, damageMonster);
  hero.life -= realDamageMonster; 
  return {
    log: `${monster.name} ataca a ${hero.name} con ${monster.mainHand} y le hace ${realDamageMonster} puntos de daño.`,
  };
};

export const grantLoots = (availableLoots: string[], loots: string[]) => {
  const index = Math.floor(Math.random() * availableLoots.length);
  const loot = availableLoots.splice(index, 1)[0];
  loots.push(loot);

  return {
    availableLoots,
    log: `${loot} ha sido entregado al jugador.`,
  };
};

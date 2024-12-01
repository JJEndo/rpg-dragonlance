export interface Equipment {
    mainHand: { name: string; bonus: number };
    secondaryHand: { name: string; bonus: number };
  }
  
  export interface Heroes {
    name: string;
    race: string;
    equipment: Equipment;
    armor: string;
    maxLife: number;
    life: number;
    attack: number;
    defense: number;
  }
  
  export interface Monsters {
    name: string;
    attack: number;
    defense: number;
    maxLife: number;
    life: number;
    mainHand: string;
  }
  
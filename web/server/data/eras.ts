interface Era {
  name: string;
  minPopulation: number;
}

export const eras: Era[] = [
  { name: 'Band', minPopulation: 1 },
  { name: 'Tribe', minPopulation: 16 },
  { name: 'Clan', minPopulation: 160 },
  { name: 'Town', minPopulation: 800 },
  { name: 'City', minPopulation: 16_000 },
  { name: 'City-State', minPopulation: 80_000 },
  { name: 'Kingdom', minPopulation: 400_000 },
  { name: 'Nation', minPopulation: 8_000_000 },
  { name: 'Alliance', minPopulation: 40_000_000 },
  { name: 'Continent', minPopulation: 200_000_000 },
  { name: 'Planet', minPopulation: 2_000_000_000 },
  { name: 'Solar System', minPopulation: 16_000_000_000 },
  { name: 'Star Sector', minPopulation: 200_000_000_000 },
  { name: 'Spiral Arm', minPopulation: 8_000_000_000_000 }
]

export const galaxyPopulation = 64_000_000_000_000;
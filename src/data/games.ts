export interface Games {
    name: string;
    description: string;
    image: string;
    url: string;
  }
  
  export const games: Games[] = [
    {
      name: "Counter-Strike 2",
      description: "",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1696513856",
      url: "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    {
        name: 'Grand Theft Auto V',
        description: '',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1695060909',
        url: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
      },
  ];
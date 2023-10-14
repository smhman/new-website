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
      image: "images/games/cs2header.jpg",
      url: "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    {
        name: 'Grand Theft Auto V',
        description: '',
        image: 'images/games/gtaheader.jpg',
        url: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
      },
  ];
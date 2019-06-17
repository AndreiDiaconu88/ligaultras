export interface Player {
  userId: number;
  level: number;
  gold: number;
  userName: string;
  clubName: string;
  medals: [
    {
      type: string;
      amount: string;
    }
  ];
}

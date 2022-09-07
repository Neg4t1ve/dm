export interface IDrumPad {
  keyTrigger: string;
  id: string;
  url: string;
  setSound: (sound: string) => void;
  power: boolean;
}

export interface IBank {
  keyTrigger: string;
  id: string;
  url: string;
}

export interface IControls {
  power: boolean;
  setPower: (power: boolean) => void;
  bankOne: IBank[];
  bankTwo: IBank[];
  bank: IBank[];
  setBank: (bank: IBank[]) => void;
  sound: string;
  setSound: (sound: string) => void;
}

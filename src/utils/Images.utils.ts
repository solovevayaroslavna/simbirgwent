import hero1 from '../images/cards/hero1.jpg';
import hero2 from '../images/cards/hero2.jpg';

export interface ICard {
  id:number,
  amount:number,
  ability:number,
  power:number,
  category:number,
  header:string,
  text:string,
  image:string,
}

function createCards() {
  const cards:ICard[] = [
    {
      id: 1,
      amount: 4,
      ability: 1,
      power: 11,
      category: 1,
      header: 'Гребанная пехтура капитана',
      text: 'Пожертвуйте грошик ветерану Бренны',
      image: `${hero1}`,
    },
    {
      id: 2,
      amount: 2,
      ability: 2,
      power: 2,
      category: 1,
      header: 'Реданский пехотинец',
      text: 'Ради Реданни я пойду на все! Пока мне платят жалование',
      image: `${hero2}`,
    },
  ];
  return cards;
}
export default createCards;

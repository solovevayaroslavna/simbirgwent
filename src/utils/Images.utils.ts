import hero1 from '../images/cards/hero1.jpg';

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
  const cards:ICard[] = [];
  cards.push({
    id: 1, amount: 4, ability: 1, power: 3, category: 1, header: 'Гребанная пехтура', text: 'Пожертвуйте грошик ветерану Бренны', image: `${hero1}`,
  });
  return cards;
}
export default createCards;

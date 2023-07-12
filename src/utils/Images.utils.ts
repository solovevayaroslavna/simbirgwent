import hero1 from '../images/cards/hero1.jpg';
import hero2 from '../images/cards/hero2.jpg';
import snowflake from '../images/cards/powers/snowflake.svg';
import snow from '../images/cards/snow.jpg';
import { ArmyCard, WeatherCard } from '../components/Shared/Card/Card.types';

function createCards() {
  const cards:(ArmyCard | WeatherCard)[] = [
    {
      id: 1,
      amount: 4,
      ability: 1,
      power: 7,
      category: 1,
      header: 'Гребанная пехтура капитана',
      text: 'Пожертвуйте грошик ветерану Бренны',
      image: `${hero1}`,
    },
    {
      id: 2,
      amount: 2,
      ability: 2,
      power: 1,
      category: 1,
      header: 'Реданский пехотинец',
      text: 'Ради Реданни я пойду на все! Пока мне платят жалование',
      image: `${hero2}`,
    },
    {
      id: 3,
      amount: 2,
      ability: 2,
      power: 1,
      category: 1,
      header: 'Реданский пехотинец',
      text: 'Ради Реданни я пойду на все! Пока мне платят жалование',
      image: `${hero2}`,
    },
    {
      id: 4,
      amount: 2,
      ability: 2,
      power: 1,
      category: 1,
      header: 'Реданский пехотинец',
      text: 'Ради Реданни я пойду на все! Пока мне платят жалование',
      image: `${hero2}`,
    },
    {
      id: 5,
      amount: 2,
      ability: 2,
      power: 1,
      category: 1,
      header: 'Реданский пехотинец',
      text: 'Ради Реданни я пойду на все! Пока мне платят жалование',
      image: `${hero2}`,
    },
    {
      id: 6,
      amount: 4,
      ability: 1,
      power: 7,
      category: 1,
      header: 'Гребанная пехтура капитана',
      text: 'Пожертвуйте грошик ветерану Бренны',
      image: `${hero1}`,
    },
    {
      id: 7,
      amount: 4,
      ability: 1,
      power: 7,
      category: 1,
      header: 'Гребанная пехтура капитана',
      text: 'Пожертвуйте грошик ветерану Бренны',
      image: `${hero1}`,
    },
    {
      id: 8,
      amount: 4,
      ability: 1,
      power: 7,
      category: 1,
      header: 'Гребанная пехтура капитана',
      text: 'Пожертвуйте грошик ветерану Бренны',
      image: `${hero1}`,
    },
    {
      id: 9,
      amount: 4,
      ability: 1,
      power: 7,
      category: 1,
      header: 'Гребанная пехтура капитана',
      text: 'Пожертвуйте грошик ветерану Бренны',
      image: `${hero1}`,
    },
    {
      id: 10,
      amount: 4,
      power: snowflake,
      header: 'Мороз',
      text: 'Мечта хорошего командира... кошмар плохого',
      image: `${snow}`,
    },
  ];
  return cards;
}
export default createCards;

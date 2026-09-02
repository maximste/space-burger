import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import { IngredientCard } from './ingredient-card/ingredient-card';

import type { TIngredient } from '@utils/types';

import cls from './burger-ingredients.module.css';

type TTabValue = 'bun' | 'sauce' | 'main';

type TBurgerIngredientsProps = {
  ingredients: TIngredient[];
  onIngredientClick: (ingredient: TIngredient) => void;
};

const TABS: { value: TTabValue; label: string }[] = [
  { value: 'bun', label: 'Булки' },
  { value: 'sauce', label: 'Соусы' },
  { value: 'main', label: 'Начинки' },
];

const BurgerIngredients = ({
  ingredients,
  onIngredientClick,
}: TBurgerIngredientsProps): React.JSX.Element => {
  const [currentTab, setCurrentTab] = useState<TTabValue>('bun');

  const sections = [
    {
      type: 'bun',
      title: 'Булки',
      items: ingredients.filter((item) => item.type === 'bun'),
    },
    {
      type: 'sauce',
      title: 'Соусы',
      items: ingredients.filter((item) => item.type === 'sauce'),
    },
    {
      type: 'main',
      title: 'Начинки',
      items: ingredients.filter((item) => item.type === 'main'),
    },
  ];

  return (
    <section className={cls.burger_ingredients}>
      <nav>
        <ul className={cls.menu}>
          {TABS.map(({ value, label }) => (
            <li key={value} className={cls.menu_item}>
              <Tab
                value={value}
                active={currentTab === value}
                onClick={(tabValue) => {
                  setCurrentTab(tabValue as TTabValue);
                }}
              >
                {label}
              </Tab>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`${cls.list} custom-scroll pt-10`}>
        {sections.map(({ type, title, items }, index) => (
          <section key={type} className={index === 0 ? undefined : 'mt-10'}>
            <h2 className="text text_type_main-medium">{title}</h2>
            <ul className={`${cls.cards} pt-6 pl-4 pr-4`}>
              {items.map((ingredient) => (
                <li key={ingredient._id}>
                  <IngredientCard ingredient={ingredient} onClick={onIngredientClick} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export { BurgerIngredients };

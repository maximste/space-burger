import { Counter, CurrencyIcon } from '@krgaa/react-developer-burger-ui-components';

import type { TIngredient } from '@utils/types';

import cls from './ingredient-card.module.css';

type TIngredientCardProps = {
  ingredient: TIngredient;
  count?: number;
  onClick?: (ingredient: TIngredient) => void;
};

const IngredientCard = ({
  ingredient,
  count = 0,
  onClick,
}: TIngredientCardProps): React.JSX.Element => {
  return (
    <article
      className={`${cls.card} pt-6 pb-8 pl-4 pr-4`}
      onClick={() => onClick?.(ingredient)}
    >
      {count > 0 && <Counter count={count} size="default" />}
      <img className={cls.image} src={ingredient.image} alt={ingredient.name} />
      <div className={`${cls.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${cls.name} text text_type_main-default`}>{ingredient.name}</p>
    </article>
  );
};

export { IngredientCard };

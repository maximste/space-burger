import type { TIngredient } from '@utils/types';

import cls from './ingredient-details.module.css';

type TIngredientDetailsProps = {
  ingredient: TIngredient;
};

const NUTRITION_ITEMS = [
  { label: 'Калории, ккал', field: 'calories' },
  { label: 'Белки, г', field: 'proteins' },
  { label: 'Жиры, г', field: 'fat' },
  { label: 'Углеводы, г', field: 'carbohydrates' },
] as const;

const IngredientDetails = ({
  ingredient,
}: TIngredientDetailsProps): React.JSX.Element => {
  return (
    <div className={cls.details}>
      <img className={cls.image} src={ingredient.image_large} alt={ingredient.name} />
      <h3 className={`${cls.name} text text_type_main-medium mt-4 mb-8`}>
        {ingredient.name}
      </h3>
      <ul className={cls.nutrition}>
        {NUTRITION_ITEMS.map(({ label, field }) => (
          <li key={field} className={cls.nutrition_item}>
            <span className="text text_type_main-default text_color_inactive">
              {label}
            </span>
            <span className="text text_type_digits-default text_color_inactive mt-2">
              {ingredient[field]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { IngredientDetails };

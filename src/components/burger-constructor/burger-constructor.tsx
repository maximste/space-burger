import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';

import type { TIngredient } from '@utils/types';

import cls from './burger-constructor.module.css';

const DEMO_FILLINGS_COUNT = 6;

type TBurgerConstructorProps = {
  ingredients: TIngredient[];
  onOrderClick: () => void;
};

const BurgerConstructor = ({
  ingredients,
  onOrderClick,
}: TBurgerConstructorProps): React.JSX.Element => {
  const bun = ingredients.find((item) => item.type === 'bun');
  const fillings = ingredients
    .filter((item) => item.type !== 'bun')
    .slice(0, DEMO_FILLINGS_COUNT);

  const bunPrice = bun ? bun.price * 2 : 0;
  const fillingsPrice = fillings.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = bunPrice + fillingsPrice;

  return (
    <section className={`${cls.burger_constructor} pt-25`}>
      <div className={cls.elements}>
        {bun && (
          <ul className={`${cls.bun_list} ml-8`}>
            <li>
              <ConstructorElement
                type="top"
                isLocked
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          </ul>
        )}

        <ul className={`${cls.fillings} custom-scroll`}>
          {fillings.map((ingredient) => (
            <li key={ingredient._id} className={cls.filling}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={() => {
                  /* layout demo */
                }}
              />
            </li>
          ))}
        </ul>

        {bun && (
          <ul className={`${cls.bun_list} ml-8`}>
            <li>
              <ConstructorElement
                type="bottom"
                isLocked
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          </ul>
        )}
      </div>

      <div className={`${cls.footer} mt-10 pr-4`}>
        <p className={`${cls.total} text text_type_digits-medium mr-10`}>
          {totalPrice}
          <CurrencyIcon type="primary" />
        </p>
        <Button htmlType="button" type="primary" size="large" onClick={onOrderClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export { BurgerConstructor };

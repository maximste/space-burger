import { CheckMarkIcon } from '@krgaa/react-developer-burger-ui-components';

import cls from './order-details.module.css';

const TEST_ORDER_NUMBER = '034536';

const OrderDetails = (): React.JSX.Element => {
  return (
    <div className={`${cls.details} pb-15`}>
      <p className={`${cls.number} text text_type_digits-large`}>{TEST_ORDER_NUMBER}</p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <div className={`${cls.icon} mt-15 mb-15`}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export { OrderDetails };

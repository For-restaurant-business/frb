import { Menu } from "./store/menu";

export type Ingridient = string;

export type Test = {
  correct_ingredients: Ingridient[];
  incorrect_ingredients: Ingridient[];
};

function generate_ingredients_tests(
  menu_position_id: string,
  menu: Menu
): Test {
  const mock_test: Test = {
    correct_ingredients: [
      "Салат",
      "Помидоры",
      "Огурцы",
      "Курица",
      "Сыр",
      "Соус",
    ],
    incorrect_ingredients: [
      "Паприка",
      "Картофель",
      "Капуста",
      "Морковь",
      "Лук",
      "Чеснок",
    ],
  };

  return mock_test;
}

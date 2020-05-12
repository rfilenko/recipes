export type modificationsProps = {
  title: string;
  list: string[];
};

export interface RecipeProps {
  name: string;
  id: number;
  type: string;
  servings?: number;
  slugUrl: string;
  lang: string;
  tags: string[];
  description: string;
  ingridients: string[];
  instructions: string[];
  modifications?: modificationsProps;
  time_prep: string;
  time_cook: string;
  time_total: string;
  image: string;
  video?: string;
}

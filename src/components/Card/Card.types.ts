import { Movie } from "../../types/Movie.types";
export interface CardProps extends Movie {
  isSaved: boolean;
  height?: string;
  width?: string;
  fromRecommendations?: boolean;
}

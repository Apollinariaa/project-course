import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEdit?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
    // error?: FieldError;
}

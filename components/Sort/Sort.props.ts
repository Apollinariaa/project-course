import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum SortEnum {
    Rating,
    Price
}

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (s: SortEnum) => void;
}

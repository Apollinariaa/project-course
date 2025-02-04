import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps  extends  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm';
    type?: 'default' | 'green' | 'puple' | 'grey' | 'red';
    children: ReactNode;
    href?: string;
}

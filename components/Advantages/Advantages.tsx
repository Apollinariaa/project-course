
import { JSX } from "react";
import { AdvantageProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import { Htag } from "../Htag/Htag";
import { P } from "../P/P";
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantageProps): JSX.Element => {
    return (
    <>
        {advantages.length > 0 && advantages.map((advantage) => {
            <>
                <CheckIcon />
                <Htag>{advantage.title}</Htag>
                <hr className={styles.vline} />
                <P>{advantage.description}</P>
            </>
        })}
    </>
    );
}

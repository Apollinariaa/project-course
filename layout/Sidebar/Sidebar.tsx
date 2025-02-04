import { JSX } from "react";
import { Menu } from "../Menu/Menu";
import LogoIcon from '../logo.svg';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { SidebarProps } from "./Sidebar.props";
import { Search } from "@/components/Search/Search";

export const Sidebar = ({className}: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)}>
            <LogoIcon className={styles.logo}/>
            <Search />
            <Menu />
        </div>
    )

}

import React from 'react';
import styles from "./Sidebar.module.css";
import { menuConfig } from "../../helpers/menu";
import { menuConfig } from "../../helpers/menu";

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <ul>
                {menuConfig.map(menuItem) => (
                <li key={menuItem.id}>
                    {menuItem.icon}
                    {menuItem.name}</li>))}
            </ul>
        </div>
    );
};

export default Sidebar;
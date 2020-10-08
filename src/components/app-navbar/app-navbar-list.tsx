import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { NavLink } from "react-router-dom";

interface INavItem {
  label: string;
  link: string;
}

export const AppNavbarList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const navItems: INavItem[] = [
    {
      label: "Главная",
      link: "/",
    },
    {
      label: "Новости",
      link: "/news",
    },
  ];

  const renderTabsItems = navItems.map((item) => {
    return (
      <Tab
        label={item.label}
        to={item.link}
        component={NavLink}
        key={item.label}
      />
    );
  });

  const onChangeHandler = (event: any, newValue: any) => {
    setCurrentPage(newValue);
  };

  return (
    <Tabs value={currentPage} onChange={onChangeHandler}>
      {renderTabsItems}
    </Tabs>
  );
};

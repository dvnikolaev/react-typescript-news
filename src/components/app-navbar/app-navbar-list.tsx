import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Tab, Tabs } from "@material-ui/core";
import { NavLink } from "react-router-dom";

interface INavItem {
  label: string;
  link: string;
}

export const AppNavbarList: React.FC = () => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(history.location.pathname);

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
        value={item.link}
        component={NavLink}
        key={item.label}
      />
    );
  });

  const onChangeHandler = (event: any, newValue: any) => {
    setCurrentPage(newValue);
  };

  return (
    <Tabs value={history.location.pathname} onChange={onChangeHandler}>
      {renderTabsItems}
    </Tabs>
  );
};

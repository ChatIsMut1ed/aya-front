import React, { useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Toast } from "primereact/toast";
import { Menu } from "primereact/menu";
export const AppTopbar = (props) => {
    const menu = useRef(null);
    const toast = useRef(null);
    const handleLogout = () => {
        // logout
        window.location.hash = "/login";
    };
    const items = [
        {
            label: "Paramétre",
            items: [
                {
                    label: "Notification",
                    icon: "pi pi-user-edit",
                    command: () => {
                        window.location.hash = "/notification";
                    },
                },
                {
                    label: "Logout",
                    icon: "pi pi-times",
                    command: (event) => {
                        handleLogout(event);
                    },
                },
            ],
        },
    ];
    const handleToggle = (event) => {
        menu.current.toggle(event);
        props.onMobileSubTopbarMenuClick(event);
    };
    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <img src={props.layoutColorMode === "light" ? "/images/etudagro.jpg" : "/images/etudagro.jpg"} alt="logo" />
                <span>Agro Etudes</span>
            </Link>

            <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                <i className="pi pi-bars" />
            </button>

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <ul className={classNames("layout-topbar-menu lg:flex origin-top", { "layout-topbar-menu-mobile-active": props.mobileTopbarMenuActive })}>
                {/* <li>
                    <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                        <i className="pi pi-calendar" />
                        <span>Events</span>
                    </button>
                </li>
                <li>
                    <button className="p-link layout-topbar-button" onClick={props.onMobileSubTopbarMenuClick}>
                        <i className="pi pi-cog" />
                        <span>Settings</span>
                    </button>
                </li> */}
                <li>
                    <button className="p-link layout-topbar-button" onClick={(event) => handleToggle(event)} aria-controls="popup_menu" aria-haspopup>
                        <i className="pi pi-user" />
                        <span>Profile</span>
                    </button>
                    <Menu model={items} popup ref={menu} id="popup_menu" />
                </li>
            </ul>
        </div>
    );
};

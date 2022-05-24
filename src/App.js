import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { AppTopbar } from "./AppTopbar";
import { AppFooter } from "./AppFooter";
import { AppMenu } from "./AppMenu";
import { AppConfig } from "./AppConfig";

import { Dashboard } from "./components/Dashboard";
import { ButtonDemo } from "./components/ButtonDemo";
import { ChartDemo } from "./components/ChartDemo";
import { Documentation } from "./components/Documentation";
import { FileDemo } from "./components/FileDemo";
import { FloatLabelDemo } from "./components/FloatLabelDemo";
import { FormLayoutDemo } from "./components/FormLayoutDemo";
import { InputDemo } from "./components/InputDemo";
import { ListDemo } from "./components/ListDemo";
import { MenuDemo } from "./components/MenuDemo";
import { MessagesDemo } from "./components/MessagesDemo";
import { MiscDemo } from "./components/MiscDemo";
import { OverlayDemo } from "./components/OverlayDemo";
import { MediaDemo } from "./components/MediaDemo";
import { PanelDemo } from "./components/PanelDemo";
import { TableDemo } from "./components/TableDemo";
import { TreeDemo } from "./components/TreeDemo";
import { InvalidStateDemo } from "./components/InvalidStateDemo";
import { BlocksDemo } from "./components/BlocksDemo";
import { IconsDemo } from "./components/IconsDemo";

import { Crud } from "./pages/Crud";
import { EmptyPage } from "./pages/EmptyPage";
import { TimelineDemo } from "./pages/TimelineDemo";

import PrimeReact from "primereact/api";
import { Tooltip } from "primereact/tooltip";

import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "prismjs/themes/prism-coy.css";
import "./assets/demo/flags/flags.css";
import "./assets/demo/Demos.scss";
import "./assets/layout/layout.scss";
import "./App.scss";
import { Portfolio } from "./pages/Portfolio";

import { Inscription } from "./components/Rendezv/Inscription";

import { Login } from "./components/Login/Login";
import { Forme1 } from "./components/Forme1/Forme1";
import { Forme2 } from "./components/Forme2/Forme2";
import { Forme3 } from "./components/Forme3/Forme3";
import { Forme4 } from "./components/Forme4/Forme4";
import { Forme5 } from "./components/Forme5/Forme5";
import { Contact } from "./components/Contact/Contact";
import { User } from "./components/User/User";
import { Facture } from "./components/Facture/Facture";
import { Activité } from "./components/Activité/Activité";
import { Description_Facture } from "./components/Description_Facture/Description_Facture";
import { Variable_Changeante } from "./components/Variable_Changeante/Variable_Changeante";
import { DevisMat } from "./components/DevisMat/DevisMat";
import { Mati } from "./components/Mati/Mati";
import { DevisObjet } from "./components/DevisObjet/DevisObjet";
import { Objet } from "./components/Objet/Objet";
import { DemandeExpertiseSol } from "./components/DemandeExpertiseSol/DemandeExpertiseSol";
import { DemandeForageEau } from "./components/DemandeForageEau/DemandeForageEau";
import { Notification } from "./components/Notification/Notification";

// Custom Hooks
import { useAuth } from "./Hooks/api/auth.api.js";

const App = () => {
    const [layoutMode, setLayoutMode] = useState("static");
    const [layoutColorMode, setLayoutColorMode] = useState("light");
    const [inputStyle, setInputStyle] = useState("outlined");
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(true);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
    const copyTooltipRef = useRef();
    const location = useLocation();

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    const isAuth = useAuth();
    const userType = "admin";

    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode);
    };

    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode);
    };

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    };

    const onToggleMenuClick = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === "overlay") {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            } else if (layoutMode === "static") {
                setStaticMenuInactive((prevState) => !prevState);
            }
        } else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const onSidebarClick = () => {
        menuClick = true;
    };

    const onMobileTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    };

    const onMobileSubTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    };

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    };
    const isDesktop = () => {
        return window.innerWidth >= 992;
    };

    const menuAdmin = [
        {
            // label: 'Menu',
            // items: [{
            //     label: 'Dashboard', icon: 'pi pi-chart-bar', to: '/'
            // },
            //   {
            //     label: 'Portfolio', icon: 'pi pi-wallet', to: '/Portfolio',
            //     command:(e)=>{ menuClick = true;
            //         if (isDesktop()) {
            //             if (layoutMode === 'overlay') {
            //                 if (mobileMenuActive === true) {
            //                     setOverlayMenuActive(true);
            //                 }
            //                 setOverlayMenuActive((prevState) => !prevState);
            //                 setMobileMenuActive(false);
            //             }
            //             else if (layoutMode === 'static') {
            //                 setStaticMenuInactive((prevState) => !prevState);
            //             }
            //         }
            //         else {
            //             setMobileMenuActive((prevState) => !prevState);
            //         }
            //         window.location.hash="/Portfolio"; }
            // },
            // {
            //     label: 'Gestionnaire des fichiers', icon: 'pi pi-money-bill', to: '',
            //     items: [{
            //         label: 'gestion du facture', icon: 'pi pi-chart-bar', to: '',
            //     },
            //     {
            //         label: 'gestion devis', icon: 'pi pi-chart-bar', to: '',
            //     },
            //     {
            //         label: 'Etude de projet', icon: 'pi pi-chart-bar', to: '',
            //     },
            //     {
            //         label: 'Etude de projet', icon: 'pi pi-chart-bar', to: '',
            //     },
            //     {
            //         label: ' demmande des fichers', icon: 'pi pi-chart-bar', to: '',
            //     },
            // ]
            // },
            // {
            //     label: 'Inscription', icon: 'pi pi-calendar-times', to: '/Inscription'
            // },
            // {
            //     label: 'Login', icon: 'pi pi-calendar-times', to: '/Login'
            // },
            // ]
        },
        //    {
        //         label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
        //         items: [
        //             { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
        //             { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
        //             { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
        //             { label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate" },
        //             { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button' },
        //             { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
        //             { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
        //             { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
        //             { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
        //             { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
        //             { label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
        //             { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
        //             { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
        //             { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
        //             { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
        //             { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
        //         ]
        //     },
        // {
        //     label: 'UI Blocks',
        //     items: [
        //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: "NEW" },
        //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-react' }
        //     ]
        // },
        // {
        //     label: 'Icons',
        //     items: [
        //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/icons' }
        //     ]
        // },
        {
            label: "Pages",
            icon: "pi pi-fw pi-clone",
            items: [
                // { label: "Crud", icon: "pi pi-fw pi-user-edit", to: "/crud" },
                // { label: "Timeline", icon: "pi pi-fw pi-calendar", to: "/timeline" },
                // { label: "Empty", icon: "pi pi-fw pi-circle-off", to: "/empty" },
                {
                    label: "Les demandes",
                    icon: "pi pi-money-bill",
                    to: "",
                    items: [
                        { label: "Forme1", icon: "pi pi-fw pi-circle-off", to: "/Form1" },
                        { label: "Forme2", icon: "pi pi-fw pi-circle-off", to: "/Form2" },
                        { label: "Forme3", icon: "pi pi-fw pi-circle-off", to: "/Form3" },
                        { label: "Forme4", icon: "pi pi-fw pi-circle-off", to: "/Form4" },
                        { label: "Forme5", icon: "pi pi-fw pi-circle-off", to: "/Form5" },
                    ],
                },
                { label: "Contacts", icon: "pi pi-fw pi-circle-off", to: "/Contact" },
                { label: "Utilisateurs", icon: "pi pi-fw pi-circle-off", to: "/User" },
                { label: "Factures", icon: "pi pi-fw pi-circle-off", to: "/Facture" },
                { label: "Activités", icon: "pi pi-fw pi-circle-off", to: "/Activité" },
                { label: "Description Des Facture", icon: "pi pi-fw pi-circle-off", to: "/Description_Facture" },
                { label: "Les Prix Des Frais", icon: "pi pi-fw pi-circle-off", to: "/Variable_Changeante" },
                { label: "Devis de Matiere", icon: "pi pi-fw pi-circle-off", to: "/DevisMat" },
                { label: "Les Matiere", icon: "pi pi-fw pi-circle-off", to: "/Mati" },
                { label: "Devis d'Objets", icon: "pi pi-fw pi-circle-off", to: "/DevisObjet" },
                { label: "Les Objets", icon: "pi pi-fw pi-circle-off", to: "/Objet" },
                { label: "Demande Expertise Sol", icon: "pi pi-fw pi-circle-off", to: "/DemandeExpertiseSol" },
                { label: "Demande Forage Eau", icon: "pi pi-fw pi-circle-off", to: "/DemandeForageEau" },
                // { label: "Notification", icon: "pi pi-fw pi-circle-off", to: "/Notification" },
            ],
        },
        // {
        //     label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
        //     items: [
        //         {
        //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
        //             items: [
        //                 {
        //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
        //                     items: [
        //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
        //                     ]
        //                 },
        //                 {
        //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
        //                     items: [
        //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
        //                         { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
        //                     ]
        //                 },
        //             ]
        //         },
        //         {
        //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
        //             items: [
        //                 {
        //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
        //                     items: [
        //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                         { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
        //                     ]
        //                 },
        //                 {
        //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
        //                     items: [
        //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
        //                         { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     label: 'Get Started',
        //     items: [
        //         { label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => { window.location = "#/documentation" } },
        //         { label: 'View Source', icon: 'pi pi-fw pi-search', command: () => { window.location = "https://github.com/primefaces/sakai-react" } }
        //     ]
        // }
    ];

    const menuUser = [
        {
            label: "Menu",
            items: [
                {
                    label: "Dashboard",
                    icon: "pi pi-chart-bar",
                    to: "/",
                },
                {
                    label: "Portfolio",
                    icon: "pi pi-wallet",
                    to: "/Portfolio",
                    command: (e) => {
                        menuClick = true;

                        if (isDesktop()) {
                            if (layoutMode === "overlay") {
                                if (mobileMenuActive === true) {
                                    setOverlayMenuActive(true);
                                }

                                setOverlayMenuActive((prevState) => !prevState);
                                setMobileMenuActive(false);
                            } else if (layoutMode === "static") {
                                setStaticMenuInactive((prevState) => !prevState);
                            }
                        } else {
                            setMobileMenuActive((prevState) => !prevState);
                        }

                        window.location.hash = "/Portfolio";
                    },
                },
                {
                    label: "Gestionnaire des fichiers",
                    icon: "pi pi-money-bill",
                    to: "",
                    items: [],
                },
                {
                    label: "Inscription",
                    icon: "pi pi-calendar-times",
                    to: "/Inscription",
                },
                {
                    label: "Login",
                    icon: "pi pi-calendar-times",
                    to: "/Login",
                },
            ],
        },
    ];

    const addClass = (element, className) => {
        if (element.classList) element.classList.add(className);
        else element.className += " " + className;
    };

    const removeClass = (element, className) => {
        if (element.classList) element.classList.remove(className);
        else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };

    const wrapperClass = classNames("layout-wrapper", {
        "layout-overlay": layoutMode === "overlay",
        "layout-static": layoutMode === "static",
        "layout-static-sidebar-inactive": staticMenuInactive && layoutMode === "static",
        "layout-overlay-sidebar-active": overlayMenuActive && layoutMode === "overlay",
        "layout-mobile-sidebar-active": mobileMenuActive,
        "p-input-filled": inputStyle === "filled",
        "p-ripple-disabled": ripple === false,
        "layout-theme-light": layoutColorMode === "light",
    });

    return (
        <div className={wrapperClass} onClick={onWrapperClick}>
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

            <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode} mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick} onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick} />
            <div className="layout-sidebar" onClick={onSidebarClick}>
                {isAuth && (
                    <>
                        {userType === "admin" && <AppMenu model={menuAdmin} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />}
                        {userType === "user" && <AppMenu model={menuUser} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />}
                    </>
                )}
            </div>

            <div className="layout-main-container">
                <div className="layout-main">
                    <Route path="/" exact component={Login} />

                    {userType == "admin" && (
                        <>
                            <Route path="/crud" component={Crud} />
                            <Route path="/empty" component={EmptyPage} />
                            <Route path="/Portfolio" component={Portfolio} />
                            <Route path="/Inscription" component={Inscription} />
                            <Route path="/Form1" component={Forme1} />
                            <Route path="/Form2" component={Forme2} />
                            <Route path="/Login" component={Login} />
                            <Route path="/Form3" component={Forme3} />
                            <Route path="/Form4" component={Forme4} />
                            <Route path="/Form5" component={Forme5} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/User" component={User} />
                            <Route path="/Facture" component={Facture} />
                            <Route path="/Activité" component={Activité} />
                            <Route path="/Description_Facture" component={Description_Facture} />
                            <Route path="/Variable_Changeante" component={Variable_Changeante} />
                            <Route path="/DevisMat" component={DevisMat} />
                            <Route path="/Mati" component={Mati} />
                            <Route path="/DevisObjet" component={DevisObjet} />
                            <Route path="/Objet" component={Objet} />
                            <Route path="/DemandeExpertiseSol" component={DemandeExpertiseSol} />
                            <Route path="/DemandeForageEau" component={DemandeForageEau} />
                            <Route path="/Notification" component={Notification} />
                        </>
                    )}

                    {userType == "user" && (
                        <>
                            <Route path="/empty" component={EmptyPage} />
                            <Route path="/Portfolio" component={Portfolio} />
                            <Route path="/Inscription" component={Inscription} />
                            <Route path="/Form1" component={Forme1} />
                            <Route path="/Form2" component={Forme2} />
                            <Route path="/Login" component={Login} />
                            <Route path="/Form3" component={Forme3} />
                            <Route path="/Form4" component={Forme4} />
                            <Route path="/Form5" component={Forme5} />
                        </>
                    )}
                    {/* <Route path="/formlayout" component={FormLayoutDemo} />
                    <Route path="/input" component={InputDemo} />
                    <Route path="/floatlabel" component={FloatLabelDemo} />
                    <Route path="/invalidstate" component={InvalidStateDemo} />
                    <Route path="/button" component={ButtonDemo} />
                    <Route path="/table" component={TableDemo} />
                    <Route path="/list" component={ListDemo} />
                    <Route path="/tree" component={TreeDemo} />
                    <Route path="/panel" component={PanelDemo} />
                    <Route path="/overlay" component={OverlayDemo} />
                    <Route path="/media" component={MediaDemo} />
                    <Route path="/menu" component={MenuDemo} />
                    <Route path="/messages" component={MessagesDemo} /> */}
                    {/* <Route path="/blocks" component={BlocksDemo} /> */}
                    {/* <Route path="/icons" component={IconsDemo} />
                    <Route path="/file" component={FileDemo} />
                    <Route path="/chart" render={() => <ChartDemo colorMode={layoutColorMode} />} />
                    <Route path="/misc" component={MiscDemo} />
                    <Route path="/timeline" component={TimelineDemo} /> */}
                    {/* <Route path="/crud" component={Crud} />
                    <Route path="/empty" component={EmptyPage} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/Inscription" component={Inscription} />
                    <Route path="/Form1" component={Forme1} />
                    <Route path="/Form2" component={Forme2} />
                    <Route path="/Login" component={Login} /> */}
                    {/* <Route path="/documentation" component={Documentation} /> */}
                </div>

                <AppFooter layoutColorMode={layoutColorMode} />
            </div>

            <AppConfig rippleEffect={ripple} onRippleEffect={onRipple} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange} layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange} />

            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>
        </div>
    );
};

export default App;

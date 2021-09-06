// import Link from "next/Link";
import { useRouter } from "next/router";
import styles from "../../styles/components/menu.module.css";
// import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import Image from "next/image";
import logo from "../../public/favicon.ico";
import { PrimeIcons } from "primereact/api";

const Menu = () => {
    const classNameActiveItemMenu = "underline font-bold border-round";
    const router = useRouter();
    const items = [
        {
            label: "Início",
            icon: "pi pi-fw pi-file",
            url: "/",
            className: router.pathname === "/" && classNameActiveItemMenu
        },
        {
            label: "Onde Ir",
            icon: "pi pi-map-marker",
            url: "/onde_ir",
            className: router.pathname === "/onde_ir" && classNameActiveItemMenu
        },
        {
            label: "Rank",
            icon: "pi pi-angle-double-up",
            url: "/rank",
            className: router.pathname === "/rank" && classNameActiveItemMenu
        },
    ];

    const start = <Image alt="logo" src={logo} width="25"></Image>;
    // const start = "";
    const end = <InputText placeholder="Buscar" type="text" style={{
        textAlign: "center !important"
    }} />;

    return (
        // <div className="card bg-pink-400">
            <Menubar model={items} start={start} end={end} className="shadow-1 border-primary border-noround p-1" />
        // </div>
    );
};

export default Menu;

// let categories = [
//     { label: "Início", icon: "pi pi-fw pi-home", link: "/" },
//     { label: "Rank", icon: "pi pi-fw pi-th-large", link: "/rank" },
//     { label: "Onde ir?", icon: "pi pi-fw pi-th-large", link: "/onde_ir" },
// ];

// export default function Menu() {
//     const router = useRouter();
//     return (
//         <Menubar>

//         </Menubar>
//         // <nav className={styles.menu}>
//         //     <ul>
//         //         {
//         //             categories.map(items => (
//         //                 <li className={styles.layoutMenu} key={"routes_" + items.link}>
//         //                     {items.link === router.pathname ?
//         //                         <a href={items.link} className={items.link === router.pathname ? styles.menuAtivo : styles.layoutLink} ><i className={items.icon + " p-mr-2"}></i> {items.label}</a> :
//         //                         <a href={items.link} className={styles.layoutLink}><i className={items.icon + " p-mr-2"}></i> {items.label}</a>
//         //                     }
//         //                 </li>
//         //             ))
//         //         }
//         //     </ul>
//         // </nav>
//     );
// }
import React from "react";
import { FaChartPie, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
// import Dashboard from "../components/Dashboard";
// import Reports from "../components/Reports";
// import Clients from "../components/Clients";
// import Bills from "../components/Bills";

export const links = [
    {
        id: 1,
        // icon: React.createElement(MdOutlineDashboardCustomize),
        icon: <MdOutlineDashboardCustomize />,
        content: 'Dashboard',
        // component: React.createElement(Dashboard),
        to: "/"
    },
    {
        id: 2,
        // icon: React.createElement(FaChartPie),
        icon: <FaChartPie />,
        content: 'Reports',
        // component: React.createElement(Reports),
        to: "/reports"
    },
    {
        id: 3,
        // icon: React.createElement(FaUser),
        icon: <FaUser />,
        content: 'Clients',
        // component: React.createElement(Clients),
        to: "/clients"
    }, 
    {
        id: 4,
        // icon: React.createElement(FaMoneyBill),
        icon: <FaMoneyBill />,
        content: 'Bills',
        // component: React.createElement(Bills),
        to: "/bills"
    }
]

export const cards = [
    {
        id: 1,
        title: 'Campaign Sets',
        content: '8,321',
        percentage: '38.5%',
        profit: true,
    },
    {
        id: 2,
        title: 'Sales',
        content: '80.5%',
        percentage: '32%',
        profit: true,
    },
    {
        id: 3,
        title: 'Revenue',
        content: '-10%',
        percentage: '28%',
        profit: false
    }
]

export const mapData = [
    {
        id: 1,
        center: [40.103435059580896, -101.55892241671084],
        area: '20% Sales in Benkelmen',
        radius: 100000
    }, 
    {
        id: 2,
        center: [46.12669133402992, -109.64485994944722],
        area: '30% Sales in Montana',
        radius: 110000
    },
    {
        id: 3,
        center: [35.451879871299504, -97.42806302498684],
        area: '35% Sales in Oklahoma',
        radius: 120000
    },
    {
        id: 4,
        center: [39.96885018881794, -116.32454747649031],
        area: '40% Sales in Nevada',
        radius: 160000
    },
    {
        id: 5,
        center: [38.95101706623665, -112.01790683405463],
        area: '45% Sales in Utah',
        radius: 180000
    }
]
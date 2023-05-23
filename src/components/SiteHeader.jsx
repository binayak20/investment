import React from 'react';
import { HiHome, HiCalendar } from 'react-icons/hi';
import { IoMdBookmarks } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import RootHeader from './RootHeader';
import InnerPageHeader from './InnerPageHeader';

const links = [
    { label: "Home", url: "/", icon: <HiHome />  },
    { label: "Invest", url: "/invest", icon: <HiCalendar />  },
    { label: "Income", url: "/income", icon: <IoMdBookmarks />  },
    { label: "Login", url: "/login", icon: <FaUserAlt />  },
];

const SiteHeader = ({isInnerPage = false, title}) => {

    return (
        <>
            {
                isInnerPage ? <InnerPageHeader title={title} /> : <RootHeader links={links} />
            }
        </>
    )
}

export default SiteHeader
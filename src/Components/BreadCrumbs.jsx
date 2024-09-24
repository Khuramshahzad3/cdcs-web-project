import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav className="text-blue-500 ">
            <ul className="flex text-base md:text-lg font-Poppins gap-3">
                <li>
                    <Link to="/" className="text-white hover:cursor-pointer ">
                        Home
                    </Link>
                </li>
                <li className=" text-white text-base md:text-lg font-Poppins">
                    {' >> '}
                </li>
                {pathnames.map((value, index) => {

                    const last = index === pathnames.length - 1;
                   
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const title = value;


                    return (
                        <li key={to} className='cursor-pointer text-white text-base md:text-lg font-Poppins capitalize'>
                            
                            <span className=""></span>
                            {
                                last ? (<span className='cursor-pointer '>{title}</span>) : (<Link className='cursor-pointer text-yellow-300' to={to}>{title}</Link>)
                            }
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BreadCrumbs;
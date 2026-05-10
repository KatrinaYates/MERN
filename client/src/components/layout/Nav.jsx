import { NavLink } from "react-router-dom";

const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/projects", "Projects"],
    ["/resume", "Resume"],
    ["/contact", "Contact"],
];

export default function Nav() {
    return (
        <nav>
            <ul>
                {links.map(([to, label]) => (
                    <li key={to}>
                        <NavLink to={to} end={to === "/"} className={({ isActive }) => (isActive ? "active" : undefined)}>
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

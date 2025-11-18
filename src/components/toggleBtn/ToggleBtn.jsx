import { useState, useEffect } from "react";

const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

function ToggleBtn() {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button className="bg-black p-3" onClick={toggleTheme}>toggle</button>
    )
}

export default ToggleBtn;
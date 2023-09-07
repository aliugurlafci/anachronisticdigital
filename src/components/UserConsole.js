import React, { useEffect, useState } from 'react';

export const UserConsole = () => {
    const [console, setConsole] = useState(false);
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const user = sessionStorage.getItem("user");

        if (user !== null) {
            setConsole(true);
        }
        else {
            setUser(JSON.parse(user));
        }
    }, []);

    return (
        <div className='user-console flex'>
            <button className="items outline-reset flex">
                <img src="https://anachronisticdigital.com/static/media/wwd.b85f6bd273479c3d5c05.webp" alt="user" />
            </button>
            <button className="items flex outline-reset">
                <i className="fas fa-cog" />
            </button>
        </div>
    );
}
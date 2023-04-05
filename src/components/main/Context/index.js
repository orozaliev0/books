import React, {useState} from 'react';
import {PageConText} from "./ContextWrapper"

const Context = ({children}) => {
    const [page, setPage] = useState(false)
    return (
        <PageConText.Provider value={{page,setPage}}>
            {children}
        </PageConText.Provider>
    );
};

export default Context;
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import PropertyProvider from '../api/PropertyProvider';


export const GlobalState = createContext();

export const DataProvider = ({children}) =>{

    const state = {
        propertyProvider: PropertyProvider()
    };

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
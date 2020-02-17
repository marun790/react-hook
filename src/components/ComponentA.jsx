import React from 'react'
import ComponentB from './ComponentB';

export const UserConext = React.createContext();
export const ProfileConext = React.createContext();

export default function ComponentA() {
    return (
        <div>
            <UserConext.Provider value="arun">
                <ProfileConext.Provider value="sella">
                    <ComponentB />
                </ProfileConext.Provider>
            </UserConext.Provider>
        </div>
    )
}

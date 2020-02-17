import React, { useContext } from 'react'
import { UserConext, ProfileConext } from './ComponentA'

export default function ComponentC() {
    const user = useContext(UserConext);
    const profile = useContext(ProfileConext);

    return (
        <div>
            User: {user} Profile : {profile}
            {/* <UserConext.Consumer>
                {user => {
                    return (
                        <ProfileConext.Consumer>
                            {
                                profile => {
                                    return <div> User: {user} Profile : {profile}</div>
                                }
                            }
                        </ProfileConext.Consumer>
                    )
                }
                }
            </UserConext.Consumer> */}
        </div>
    )
}

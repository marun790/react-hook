import React from 'react'
import { UserConext, ProfileConext } from './ComponentA'

export default function ComponentC() {
    return (
        <div>
            <UserConext.Consumer>
                {user => {
                    return (
                        <ProfileConext.Consumer>
                            {
                                profile => {
                                    return <daiv> User: {user} Profile : {profile}</daiv>
                                }
                            }
                        </ProfileConext.Consumer>
                    )
                }
                }
            </UserConext.Consumer>
        </div>
    )
}

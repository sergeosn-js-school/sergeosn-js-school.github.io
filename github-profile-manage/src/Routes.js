import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import UserProfileProvider from './UserInfo/UserProvider';
import UserFollowingPreview from './UserInfo/UserFollowingPreview';
import UserFollowersPreview from './UserInfo/UserFollowersPreview';
import UserInfoEditPreview from './UserInfo/UserInfoEditPreview';
import { config } from './config';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to={'/' + config.defaultUserLogin + '/following'}/>}/>
            <Route exact path='/:userLogin' render={({match}) => <Redirect to={'/' + match.params.userLogin + '/following'}/>}/>
            <Route exact path='/:userLogin/edit'
                   render={({match}) =>
                       <UserProfileProvider userLogin={match.params.userLogin}>
                           <UserInfoEditPreview/>
                       </UserProfileProvider>
                   }
            />
            <Route exact path='/:userLogin/following'
                render={({match}) =>
                    <UserProfileProvider userLogin={match.params.userLogin}>
                        <UserFollowingPreview/>
                    </UserProfileProvider>
                }
            />
            <Route exact path='/:userLogin/followers'
                render={({match}) =>
                    <UserProfileProvider userLogin={match.params.userLogin}>
                        <UserFollowersPreview/>
                    </UserProfileProvider>
                }
            />
        </Switch>
    )
};

export default Routes;
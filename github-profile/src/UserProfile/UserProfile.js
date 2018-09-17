import React from 'react';
import UserProfilePreview from './UserProfilePreview';
import UserProfileEditor from './UserProfileEditor'

export const UP_MODE_VIEW = 'view';
export const UP_MODE_EDIT = 'edit';

class UserProfile extends React.Component {
    state = {
        mode: UP_MODE_VIEW
    };

    toggleMode = () => this.setState(
        ({ mode }) => ({
            mode: mode === UP_MODE_VIEW
                ? UP_MODE_EDIT
                : UP_MODE_VIEW,
        }),
    );

    render() {
        const { mode } = this.state;
        const { user, onChange } = this.props;
        return (
            mode === UP_MODE_VIEW
                ? <UserProfilePreview {...user} onViewModeClick={this.toggleMode} />
                : <UserProfileEditor
                    user={user}
                    onViewModeClick={this.toggleMode}
                    onChange={onChange}
                />
        );
    }
}

export default UserProfile;

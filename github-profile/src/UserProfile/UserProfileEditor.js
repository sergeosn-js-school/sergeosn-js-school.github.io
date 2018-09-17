import React from 'react';

class UserProfileEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar_url: props.user.avatar_url,
            name: props.user.name,
            company: props.user.company,
            location: props.user.location,
            bio: props.user.bio,
            login: props.user.login,
        };

        for (let element in this.state) {
            if (this.state[element] == null) {
                this.state[element] = '';
            }
        }
    }

    changeUserName = ({ target }) => this.setState({
        name: target.value,
    });

    changeCompany = ({ target }) => this.setState({
        company: target.value,
    });

    changeLocation = ({ target }) => this.setState({
        location: target.value,
    });

    changeBio = ({ target }) => this.setState({
        bio: target.value,
    });

    handleSubmit = event => {
        event.preventDefault();
        const {onChange, onViewModeClick} = this.props;
        if (typeof onChange === 'function') {
            onChange(this.state);
        }
        onViewModeClick();
    };

    render() {
        const { avatar_url, name, company, location, bio, login } = this.state;
        const {onViewModeClick} = this.props;
        return (
            <div className="col-md-4">
                <form className="form-edit" onSubmit={this.handleSubmit}>
                    <div className="form-avatar">
                        <img src={avatar_url} alt={name} className="user-profile-preview--img"/>
                        <p className="user-profile-preview--login">{login}</p>
                    </div>
                    <div className="form-edit--inputs">
                        <div className="form-group">
                            <label htmlFor="name">User Name</label>
                            <input
                                type="text"
                                id='name'
                                className="form-control"
                                placeholder="Enter User Name"
                                onChange={this.changeUserName}
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                id='company'
                                className="form-control"
                                placeholder="Enter Company"
                                onChange={this.changeCompany}
                                value={company}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id='location'
                                className="form-control"
                                placeholder="Enter Location"
                                onChange={this.changeLocation}
                                value={location}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                className="form-control"
                                id='bio'
                                placeholder="Enter BIO"
                                onChange={this.changeBio}
                                value={bio}
                            />
                        </div>
                        <button
                            type="reset"
                            className="btn btn-secondary mb-2"
                            onClick={onViewModeClick}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary mb-2 btn-save">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserProfileEditor;

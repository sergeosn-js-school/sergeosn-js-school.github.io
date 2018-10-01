import React from 'react';
import UserProfileProvider from './UserProvider';
import { Link, Redirect } from 'react-router-dom';

class UserInfoEdit extends React.Component {
    constructor(props) {
        super(props);
        const {user} = this.props;
        this.state = {
            name: user.name,
            company: user.company,
            location: user.location,
            bio: user.bio,
            token: '',
            redirect: null
        };
    }

    changeUserName = ({target}) => this.setState({
        name: target.value,
    });

    changeCompany = ({target}) => this.setState({
        company: target.value,
    });

    changeLocation = ({target}) => this.setState({
        location: target.value,
    });

    changeBio = ({target}) => this.setState({
        bio: target.value,
    });

    changeToken = ({target}) => this.setState({
        token: target.value,
    });

    handleSubmit = (e) => {
        e.preventDefault();
        const {onChange} = this.props;

        if (typeof onChange !== 'function') return;

        const {name, company, location, bio, token} = this.state;

        if (!token) {
            alert('Please enter the token');
            return;
        }

        onChange({name, company, location, bio}, token)
            .then(response => this.setState({
                redirect: '/' + response.login + '/following'
            }))
            .catch(error => alert('Can not save. Please try again later. Error:' + error));
    };

    render() {
        const {user} = this.props;
        const {avatar_url, login} = user;
        const {redirect} = this.state;

        if (redirect !== null) {
            return <Redirect to={redirect}/>;
        }

        return (
            <div className="col-md-4">
                <form className="form-edit" onSubmit={this.handleSubmit}>
                    <div className="form-avatar">
                        <img src={avatar_url} alt={this.state.name} className="user-profile-preview--img"/>
                        <p className="user-profile-preview--login">{login}</p>
                        <div className="form-group token">
                            <label htmlFor="name">Access Token</label>
                            <input
                                type="password"
                                id='token'
                                name='token'
                                className="form-control"
                                placeholder="Enter Access Token"
                                onChange={this.changeToken}
                                value={this.state.token}
                            />
                        </div>
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
                                value={this.state.name}
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
                                value={this.state.company}
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
                                value={this.state.location}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                className="form-control"
                                id='bio'
                                placeholder="Enter BIO"
                                onChange={this.changeBio}
                                value={this.state.bio}
                            />
                        </div>
                        <Link to={'/' + login} className="btn btn-secondary mb-2">
                            Cancel
                        </Link>
                        <button type="submit" className="btn btn-primary mb-2 btn-save">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserProfileProvider.connect()(UserInfoEdit);

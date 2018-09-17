export const updateUserInfo = withData => ({ user }) => ({
    user: { ...user, ...withData },
});

export const getUserInfo = (user) => ({
    avatar_url: user.avatar_url,
    name: user.name,
    login: user.login,
    company: user.company,
    location: user.location,
    bio: user.bio,
    public_repos:user.public_repos,
    following: user.following,
    followers: user.followers,
});

export const fetchUser = url => fetch(url)
    .then(res => res.json())
    .then(getUserInfo);

export const decode = base64 => new Buffer(base64, 'base64').toString('ascii');
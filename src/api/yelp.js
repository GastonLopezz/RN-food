import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer sffOTfKa63FiFJ2sqmZW-vGYqgF8giEPQHxwfxre2OovmbTlK0gERQOn8GLJaCm5NUE7OTthjA52sft_VRQapYZ8Mizne549ARVldsjZQt5y2gW3d-CUXPf6hZYmYHYx'
    }
})

export interface Post {
    id: string;
    title: string;
    information: string;
}

export interface PostCustomer {
    title: string;
    information: string;
}

export interface postDate {
    postCustomer: PostCustomer;
}

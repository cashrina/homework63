export interface Post {
    id: string;
    title: string;
    information: string;
    date: string;
}

export interface PostCustomer {
    title: string;
    information: string;
    date: string;
}

export interface Apipost {
    [id: string]: Post;
}

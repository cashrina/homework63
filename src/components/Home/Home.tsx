import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../axiosApi.ts";
import HomeItem from "./HomeItem.tsx";
import {Apipost, Post} from "../../types.ts";

const Home = () => {
    const [postList, setPostList] = useState<Post[]>([]);

    const fetchPosts = useCallback(async () => {
        try {
            const response = await axiosApi.get<Apipost | null>(`/posts.json/`);
            const postResponse = response.data;

            if (postResponse !== null) {
                const posts: Post[] = Object.keys(postResponse).map((id: string) => ({
                    ...postResponse[id],
                    id,
                }));
                setPostList(posts);
            } else {
                setPostList([]);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
            setPostList([]);
        }
    }, []);

    useEffect(() => {
        void fetchPosts();
    }, [fetchPosts]);
    console.log(postList);


    return (
        <>
            {postList.map((item, index) => (
                <HomeItem key={index} postTitle={item.title} postDate={item.date} postLink={item.id}/>
            ))}

        </>
    );
};

export default Home;
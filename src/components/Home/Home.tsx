import {useEffect, useState} from "react";
import axiosApi from "../../axiosApi.ts";
import HomeItem from "./HomeItem.tsx";
import {Post} from "../../types.ts";

const Home = () => {
    const [postList, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        const getPostList = async () => {
            try {
                const response = await axiosApi.get('/posts.json');
                const data = response.data;
                console.log("Data from server:", data);

                const dataArray = Object.keys(data).map(key => ({
                    id:key,
                    ...data[key]
                }));

                setPostList(dataArray);

            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        void getPostList();
    }, []);

    return (
        <>
            {postList.map((item, index) => (
                <HomeItem key={index} postTitle={item.title} postDate={item.data} />
            ))}
        </>
    );
};

export default Home;
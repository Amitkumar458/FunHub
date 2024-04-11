
import { useGetUserPost } from "@/hooks/post";
import UserPosts from "./UserPosts";

const AccountPosts = ({id}) => {
  const {data , isLoading} = useGetUserPost(id);
  return (
    <UserPosts data={data} isLoading={isLoading}/>
  );
};

export default AccountPosts;

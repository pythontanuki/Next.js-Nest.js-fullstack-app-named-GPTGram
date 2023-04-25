import { Avatar, Flex, Text, VStack, Image, Box } from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { FiSend } from "react-icons/fi";
import { RiBookmarkLine } from "react-icons/ri";
//add verified mark
// import { MdVerified } from "react-icons/md";

type Props = {
  avatarImage: {
    id: number;
    url: string;
  };
  displayName: string;
  postImage: {
    id: number;
    url: string;
  };
  commentByPostOwner: string;
  representativeUserNameOfLikes: string;
  representativeAvatarOfLikes: {
    id: number;
    url: string;
  };
  representativeUserNameOfComments_first: string;
  representativeCommentContent_first: string;
  representativeUserNameOfComments_second: string;
  representativeCommentContent_second: string;
  // verified: boolean;
  commentAmount: string;
  postedAt: string;
};

export const Post: React.FC<Props> = ({
  avatarImage,
  displayName,
  postImage,
  commentByPostOwner,
  representativeUserNameOfLikes,
  representativeAvatarOfLikes,
  representativeUserNameOfComments_first,
  representativeCommentContent_first,
  representativeUserNameOfComments_second,
  representativeCommentContent_second,
  commentAmount,
  postedAt,
}) => {
  return (
    <VStack>
      <Flex>
        <Avatar
          name={`${displayName}+'s Post`}
          src={avatarImage.url}
          w={"30px"}
          h={"30px"}
        />
        <Text>{displayName}</Text>
        <Text>{postedAt}</Text>
      </Flex>
      <Image
        src={postImage.url}
        alt="Any is OK."
        boxSize={"100px"}
        objectFit="cover"
      />
      <Flex>
        <AiOutlineHeart />
        <HiOutlineChatBubbleLeft />
        <FiSend />
        <RiBookmarkLine />
      </Flex>
      <Flex>
        <Image
          src={representativeAvatarOfLikes.url}
          alt="Any is OK"
          h={"8px"}
          w={"8px"}
        />
        <Text>{`${representativeUserNameOfLikes}、その他が「いいね！」しました`}</Text>
      </Flex>
      <Text>{`${displayName} ${commentByPostOwner}`}</Text>
      <Text>{`コメント${commentAmount}件をすべて見る`}</Text>
      <VStack>
        <Text>
          {`${representativeUserNameOfComments_first} ${representativeCommentContent_first}`}
        </Text>
        <Text>
          {`${representativeUserNameOfComments_second} ${representativeCommentContent_second}`}
        </Text>
      </VStack>
      <Text>コメントを追加</Text>
    </VStack>
  );
};

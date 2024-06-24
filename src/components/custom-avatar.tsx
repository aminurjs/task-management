import { getNameInitials } from "@/utilities";
import { Avatar, AvatarProps } from "antd";

type Props = AvatarProps & {
  name?: string;
};

const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <Avatar
      alt="Aminur Rahman"
      size="small"
      style={{
        backgroundColor: "87d8068",
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name || "")}
    </Avatar>
  );
};

export default CustomAvatar;

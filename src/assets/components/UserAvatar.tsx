interface UserAvatarProps {
  src: string;
  alt: string;
  username: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt, username }) => {
  return (
    <div className="flex items-center p-4">
      <img src={src} alt={alt} className="w-10 h-10 rounded-full mr-3" />
      <span className="text-sm">{username}</span>
    </div>
  );
};

export default UserAvatar;

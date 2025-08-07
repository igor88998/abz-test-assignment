import type { User } from "@/shared/types";
import "./userCard.css";

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (userId: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card__avatar">
        {user.photo ? (
          <img
            src={user.photo}
            alt={user.name}
            className="user-card__avatar-img"
          />
        ) : (
          <span className="user-card__avatar-fallback">
            {user.name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <h3 className="user-card__name text-body">{user.name}</h3>

      <div className="user-card__info text-body">
        <p className="user-card__position">{user.position}</p>
        <p className="user-card__email">{user.email}</p>
        <p className="user-card__phone">{user.phone}</p>
      </div>
    </div>
  );
};

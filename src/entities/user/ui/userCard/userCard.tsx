import type { User } from "@/shared/types";
import "./userCard.css";

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (userId: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <article className="user-card">
      {user.photo ? (
        <img
          src={user.photo}
          alt={user.name}
          className="user-card__avatar-img"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="user-card__avatar-fallback">
          {user.name.charAt(0).toUpperCase()}
        </span>
      )}
      <h3 className="user-card__name text-body">{user.name}</h3>

      <div className="user-card__info">
        <p className="user-card__position">{user.position}</p>
        <p className="user-card__email">{user.email}</p>
        <p className="user-card__phone">{user.phone}</p>
      </div>
    </article>
  );
};

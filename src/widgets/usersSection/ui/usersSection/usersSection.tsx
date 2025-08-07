import React, { useState } from "react";
import { UserCard } from "@/entities/user";
import { Button, ButtonType, ButtonSize } from "@/shared/ui/button";
import { useUsers } from "@/shared/api";
import type { User } from "@/shared/types";
import "./usersSection.css";

export const UsersSection: React.FC = () => {
	const [page, setPage] = useState(1);
	const [allUsers, setAllUsers] = useState<User[]>([]);
	const [totalUsers, setTotalUsers] = useState(0);

	const { data, isLoading, error } = useUsers({ page, count: 6 });

	React.useEffect(() => {
		if (data?.users) {
			if (page === 1) {
				setAllUsers(data.users);
			} else {
				setAllUsers((prev) => [...prev, ...data.users]);
			}
			setTotalUsers(data.total_users);
		}
	}, [data, page]);

	const handleShowMore = () => {
		setPage((prev) => prev + 1);
	};

	const hasMore = allUsers.length < totalUsers;

	if (error) {
		return (
			<section className="users-section">
				<h2 className="users-section__title">Working with GET request</h2>
				<div className="users-section__error">
					Failed to load users. Please try again later.
				</div>
			</section>
		);
	}

	return (
		<section className="users-section">
			<h2 className="users-section__title">Working with GET request</h2>

			<div className="users-section__grid">
				{allUsers.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>

			{hasMore && (
				<div className="users-section__actions">
					<Button
						btnType={ButtonType.PRIMARY}
						size={ButtonSize.MEDIUM}
						onClick={handleShowMore}
						loading={isLoading}
						disabled={isLoading}
						className="users-section__show-more-btn"
					>
						{isLoading ? "Loading..." : "Show more"}
					</Button>
				</div>
			)}
		</section>
	);
};

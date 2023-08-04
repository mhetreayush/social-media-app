import { user_stats } from "./user-stats.js";
import { get_user } from "./get-user.js";
import { get_users } from "./get-users.js";
import { create_user } from "./create-user.js";

export const user_services = {
  query: {
    get_users,
    get_user,
    user_stats,
  },
  mutation: {
    create_user,
  },
};

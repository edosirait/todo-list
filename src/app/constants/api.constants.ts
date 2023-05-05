import {environment} from "../environment/environment";

export const API_DOMAIN = environment.DOMAIN_URL

export const ACTIVITY_LIST = `${API_DOMAIN}/activity-groups`;
export const ACTIVITY_TODO = `${API_DOMAIN}/todo-items`;

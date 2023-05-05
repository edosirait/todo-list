export interface UserModel {
  title: string;
  email: string;
}

export interface ActivityList {
  created_at: string;
  email: string;
  id: number;
  title: string;
  updated_at: string;
}

export interface TodoList {
  activity_group_id: string;
  priority: string;
  title: string;
  id: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  todo_items: TodoList[];
}

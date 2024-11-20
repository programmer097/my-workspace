export interface Task {
  _id: string;
  name: string;
  description: string;
  dueDate: Date;
  important: boolean;
  isComplete: boolean;
  __v: number;
}

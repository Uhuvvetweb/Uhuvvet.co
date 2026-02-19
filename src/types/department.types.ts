/**
 * Administrative department related type definitions
 */

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconColor: string;
  headId: string;
  headName: string;
  membersCount: number;
  category: DepartmentCategory;
  responsibilities: string[];
  createdAt: Date;
}

export type DepartmentCategory = 
  | 'education' 
  | 'social' 
  | 'technical' 
  | 'management' 
  | 'support';

export interface DepartmentMember {
  id: string;
  userId: string;
  departmentId: string;
  role: DepartmentRole;
  joinedAt: Date;
}

export type DepartmentRole = 'head' | 'deputy' | 'member';

export interface CreateDepartmentInput {
  name: string;
  description: string;
  category: DepartmentCategory;
  responsibilities: string[];
  icon?: string;
  iconColor?: string;
}

export interface UpdateDepartmentInput {
  name?: string;
  description?: string;
  category?: DepartmentCategory;
  responsibilities?: string[];
  headId?: string;
}

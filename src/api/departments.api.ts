/**
 * Departments API endpoints
 */

import { apiClient } from './client.api';
import type { 
  Department,
  CreateDepartmentInput,
  UpdateDepartmentInput,
  DepartmentMember,
  ApiResponse,
  PaginationParams
} from '../types';

export const departmentsApi = {
  /**
   * Get all departments
   */
  getDepartments: async (params?: PaginationParams): Promise<ApiResponse<Department[]>> => {
    return apiClient.get('/departments', { params });
  },

  /**
   * Get a single department by ID
   */
  getDepartmentById: async (departmentId: string): Promise<ApiResponse<Department>> => {
    return apiClient.get(`/departments/${departmentId}`);
  },

  /**
   * Create a new department
   */
  createDepartment: async (data: CreateDepartmentInput): Promise<ApiResponse<Department>> => {
    return apiClient.post('/departments', data);
  },

  /**
   * Update a department
   */
  updateDepartment: async (
    departmentId: string,
    data: UpdateDepartmentInput
  ): Promise<ApiResponse<Department>> => {
    return apiClient.patch(`/departments/${departmentId}`, data);
  },

  /**
   * Delete a department
   */
  deleteDepartment: async (departmentId: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/departments/${departmentId}`);
  },

  /**
   * Get department members
   */
  getDepartmentMembers: async (departmentId: string): Promise<ApiResponse<DepartmentMember[]>> => {
    return apiClient.get(`/departments/${departmentId}/members`);
  },

  /**
   * Add member to department
   */
  addMember: async (
    departmentId: string,
    userId: string,
    role: string
  ): Promise<ApiResponse<void>> => {
    return apiClient.post(`/departments/${departmentId}/members`, { userId, role });
  },

  /**
   * Remove member from department
   */
  removeMember: async (
    departmentId: string,
    userId: string
  ): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/departments/${departmentId}/members/${userId}`);
  },
};

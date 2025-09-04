import { ref, computed } from 'vue';
import type { User, LoginCredentials, SignupCredentials, AuthState } from '../types/auth';

const user = ref<User | null>(null);
const isLoading = ref(false);

export const useAuth = () => {
  const isAuthenticated = computed(() => !!user.value);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    isLoading.value = true;
    try {
      // 실제 API 호출 대신 mock 로직
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      user.value = {
        id: 1,
        username: 'testuser',
        email: credentials.email,
        createdAt: new Date()
      };
      
      // localStorage에 사용자 정보 저장
      localStorage.setItem('user', JSON.stringify(user.value));
    } catch (error) {
      throw new Error('로그인에 실패했습니다.');
    } finally {
      isLoading.value = false;
    }
  };

  const signup = async (credentials: SignupCredentials): Promise<void> => {
    isLoading.value = true;
    try {
      // 실제 API 호출 대신 mock 로직
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      user.value = {
        id: Date.now(),
        username: credentials.username,
        email: credentials.email,
        createdAt: new Date()
      };
      
      // localStorage에 사용자 정보 저장
      localStorage.setItem('user', JSON.stringify(user.value));
    } catch (error) {
      throw new Error('회원가입에 실패했습니다.');
    } finally {
      isLoading.value = false;
    }
  };

  const logout = (): void => {
    user.value = null;
    localStorage.removeItem('user');
  };

  const initializeAuth = (): void => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser);
      } catch (error) {
        console.error('Failed to parse saved user data:', error);
        localStorage.removeItem('user');
      }
    }
  };

  const authState = computed<AuthState>(() => ({
    user: user.value,
    isAuthenticated: isAuthenticated.value,
    isLoading: isLoading.value
  }));

  return {
    authState,
    user: computed(() => user.value),
    isAuthenticated,
    isLoading: computed(() => isLoading.value),
    login,
    signup,
    logout,
    initializeAuth
  };
};
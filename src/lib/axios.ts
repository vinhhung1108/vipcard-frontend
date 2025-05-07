import Axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

// Cấu hình Axios instance
const api: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Địa chỉ API từ biến môi trường
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Timeout 10 giây
});

// Interceptor cho yêu cầu: Thêm token nếu cần
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = process.env.NEXT_PUBLIC_API_TOKEN; // Lấy token từ biến môi trường
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Interceptor cho phản hồi: Xử lý lỗi
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    // Xử lý lỗi chung
    if (error.response) {
      const { status, data } = error.response;
      if (status === 401) {
        throw new Error('Không có quyền truy cập. Vui lòng đăng nhập lại.');
      } else if (status === 404) {
        throw new Error('API không tồn tại.');
      } else {
        throw new Error(data.message || 'Lỗi từ server.');
      }
    } else if (error.request) {
      throw new Error('Không nhận được phản hồi từ server.');
    } else {
      throw new Error('Lỗi khi gửi yêu cầu.');
    }
  }
);

export default api;

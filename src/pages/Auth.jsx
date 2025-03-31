import { useState, useEffect } from "react";
import useUserStore from "@/Store/useUserStore.js";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const { signupUser, loginUser, loading, error } = useUserStore();

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  useEffect(() => {
    if (error) {
      setNotification({
        show: true,
        type: "error",
        message: error,
      });
    }
  }, [error]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setNotification({
        show: true,
        type: "error",
        message: "Email and password are required",
      });
      return false;
    }

    if (!isLogin && (!formData.name || !formData.phone)) {
      setNotification({
        show: true,
        type: "error",
        message: "All fields are required for signup",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification({
        show: true,
        type: "error",
        message: "Please enter a valid email address",
      });
      return false;
    }

    if (formData.password.length < 6) {
      setNotification({
        show: true,
        type: "error",
        message: "Password must be at least 6 characters long",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      if (isLogin) {
        await loginUser({
          data: { email: formData.email, password: formData.password },
        });
        setNotification({
          show: true,
          type: "success",
          message: "Logged in successfully!",
        });
      } else {
        await signupUser({ data: formData });
        setNotification({
          show: true,
          type: "success",
          message: "Account created successfully!",
        });
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setNotification({
        show: true,
        type: "error",
        message: error.message || "Authentication failed. Please try again.",
      });
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
    setNotification({ show: false, type: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-xl shadow-md border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-indigo-600 mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-500">
            {isLogin
              ? "Sign in to access your account"
              : "Sign up to get started with our service"}
          </p>
        </div>

        {notification.show && (
          <div
            className={`flex items-center p-4 rounded-lg text-sm ${
              notification.type === "error"
                ? "bg-red-50 text-red-700 border border-red-200"
                : "bg-green-50 text-green-700 border border-green-200"
            }`}
          >
            {notification.type === "error" ? (
              <XCircle className="h-5 w-5 mr-2" />
            ) : (
              <CheckCircle className="h-5 w-5 mr-2" />
            )}
            <p>{notification.message}</p>
            <button
              onClick={() => setNotification({ ...notification, show: false })}
              className="ml-auto text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <XCircle className="h-4 w-4" />
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {!isLogin && (
            <>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-colors"
                  placeholder="you name "
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-colors"
                  placeholder="+91 2345678843"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-colors"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-colors"
              placeholder="••••••••"
              required
            />
            {!isLogin && (
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 6 characters long
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-200 transition-colors disabled:bg-indigo-300"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <AlertCircle className="animate-spin h-5 w-5 mr-2" />
                  Processing...
                </span>
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>

        <div className="text-center pt-2">
          <button
            onClick={toggleAuthMode}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
            type="button"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

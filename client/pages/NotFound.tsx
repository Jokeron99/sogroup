import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-display text-6xl">404</h1>
        <p className="text-muted-foreground">Страница не найдена</p>
        <a href="/" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 shadow-soft hover:opacity-90 transition">
          На главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;

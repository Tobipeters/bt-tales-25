import React, { useState, useEffect, JSX, ReactNode } from "react";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  variant?: "default" | "success" | "error" | "info" | "warning";
  showCloseButton?: boolean;
  closable?: boolean;
  animation?: "zoom";
  footer?: JSX.Element;
  icon?: JSX.Element;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  variant = "default",
  showCloseButton = true,
  closable = true,
  animation = "zoom",
  footer,
  icon,
}: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
      const timeout = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 300);
      return () => clearTimeout(timeout);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    if (closable && onClose) {
      onClose();
    }
  };

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget && closable) {
      handleClose();
    }
  };

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-7xl",
  };

  const animationClasses = {
    zoom: isAnimating ? "animate-zoom-in" : "animate-zoom-out",
    // slide: isAnimating ? 'animate-slide-up' : 'animate-slide-down',
    // fade: isAnimating ? 'animate-fade-in' : 'animate-fade-out'
  };

  const variantClasses = {
    default: "modal-default",
    success: "modal-success",
    warning: "modal-warning",
    error: "modal-error",
    info: "modal-info",
  };

  const getVariantIcon = () => {
    if (icon) return icon;

    switch (variant) {
      case "success":
        return <CheckCircle size={24} />;
      case "warning":
        return <AlertTriangle size={24} />;
      case "error":
        return <AlertCircle size={24} />;
      case "info":
        return <Info size={24} />;
      default:
        return null;
    }
  };

  if (!isVisible) return null;
  //   if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop ${
        isAnimating ? "fade-in" : "fade-out"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full ${sizeClasses[size]} modal-container ${variantClasses[variant]} rounded-2xl overflow-hidden ${animationClasses[animation]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="modal-header px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getVariantIcon() && (
                <div className="modal-icon">{getVariantIcon()}</div>
              )}
              {title && (
                <h2
                  className="text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h2>
              )}
            </div>

            {showCloseButton && (
              <button
                onClick={handleClose}
                className="close-button p-2 rounded-lg transition-all duration-200"
                disabled={!closable}
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div
          className="modal-content px-6 py-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {children}
        </div>

        {/* Footer */}
        {footer && <div className="modal-footer px-6 py-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;

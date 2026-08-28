import { HTMLAttributes } from "react";

export type BadgeVariant = 'success' | 'warning' | 'info' | 'error' | 'neutral' | 'default';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export function Badge({ variant = 'default', children, className = "", ...props }: BadgeProps) {
  let variantClasses = "";
  switch (variant) {
    case 'success':
      variantClasses = "badge-success";
      break;
    case 'warning':
      variantClasses = "badge-warning";
      break;
    case 'info':
      variantClasses = "badge-info";
      break;
    case 'error':
      variantClasses = "badge-error";
      break;
    case 'neutral':
      variantClasses = "badge-neutral";
      break;
    default:
      variantClasses = "bg-gray-100 text-gray-800";
  }

  return (
    <span className={`badge ${variantClasses} ${className}`} {...props}>
      {children}
    </span>
  );
}

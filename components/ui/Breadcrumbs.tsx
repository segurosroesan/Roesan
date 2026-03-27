import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export function Breadcrumbs({ items, variant = "light" }: { items: BreadcrumbItem[], variant?: "light" | "dark" }) {
    const textBase = variant === "light" ? "text-slate-400" : "text-white/60";
    const textHover = variant === "light" ? "hover:text-purple-600" : "hover:text-white";
    const textActive = variant === "light" ? "text-slate-600" : "text-white";
    const iconColor = variant === "light" ? "text-slate-400" : "text-white/40";

    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className={`flex items-center space-x-2 text-sm ${textBase}`}>
                <li>
                    <Link href="/" className={`${textHover} transition-colors flex items-center`}>
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Inicio</span>
                    </Link>
                </li>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="flex items-center">
                            <ChevronRight className={`w-4 h-4 mx-1 ${iconColor}`} />
                            {isLast || !item.href ? (
                                <span className={`font-medium ${textActive}`} aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`${textHover} transition-colors`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

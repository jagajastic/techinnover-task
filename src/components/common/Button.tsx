import React from "react";

interface ButtonProps {
	size: ButtonSize;
	variant: ButtonVariant;
	children: React.ReactNode;
}

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "ghost" | "fill" | "ghostoutline";

const sizeRecord: Record<ButtonSize, React.CSSProperties> = {
	small: {
		padding: "0.625rem 1.5rem",
	},
	medium: {
		padding: "2rem 3rem",
	},
	large: {
		padding: "3rem 4rem",
	},
};

const variantRecord: Record<ButtonVariant, React.CSSProperties> = {
	ghost: {
		color: "#e1f16b",
		borderColor: "#e1f16b",
		borderWidth: "1px",
        borderStyle: "solid",
		backgroundColor: "transparent",
	},
	fill: {
		backgroundColor: "#e1f16b",
		color: "#1a1d1f",
		border: "none",
	},
    ghostoutline: {
        color: "#e1f16b",
		border: "none",
		backgroundColor: "transparent",
        margin: "unset",
        padding: "unset",
        display: "flex",
        justifyContent: "space-between"
    }
};

const defaultStyles: React.CSSProperties = {
    display: "flex",
	fontWeight: "500",
	cursor: "pointer",
	lineHeight: "20px",
	alignItems: "center",
	letterSpacing: "-1%",
	fontSize: "1.0625rem",
	fontFamily: "Product Sans",
    margin: "0 0.5rem"

};

export default function Button({
	size,
	variant,
	children,
}: ButtonProps) {
    console.log(children, "children");
    
	return (
		<button
			style={{
				...defaultStyles,
				...sizeRecord[size],
				...variantRecord[variant],
			}}
		>
			{children}
		</button>
	);
}

import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs";
import customTheme from "../utils/customTheme";
import { type DOMAttributes, forwardRef } from "react";

type props = DOMAttributes<HTMLDivElement> & {
	language: string;
	code: string;
	title?: string;
	className?: string;
};

const CodeBlock = forwardRef<HTMLDivElement, props>(
	({ language, code, title, className, ...rest }, ref) => {
		return (
			<div
				className={`overflow-hidden rounded-lg border border-gray-100 w-full bg-white ${className}`}
				ref={ref}
				{...rest}
			>
				{title && (
					<div className="flex justify-between border-b border-gray-100 py-2 px-4 bg-gray-50">
						<span className="font-bold">{title}</span>
					</div>
				)}
				<div className="p-4">
					<SyntaxHighlighter language={language} style={googlecode}>
						{code}
					</SyntaxHighlighter>
				</div>
			</div>
		);
	},
);
CodeBlock.displayName = "CodeBlock";

export default CodeBlock;

import CodeBlock from "@/app/components/CodeBlock";
import { Subtitle } from "@/app/components/subtitle";
import Title from "@/app/components/Title";
import type { ReactNode } from "react";

type codeProps = {
	content: string;
};
type textBlockProps = {
	children: ReactNode;
};
function Code({ content }: codeProps) {
	return (
		<code className="p-1 rounded-lg bg-green-50 text-green-500 ">
			{content}
		</code>
	);
}

function BlockText({ children }: textBlockProps) {
	return <div className="contents">{children}</div>;
}

export default function Docs() {
	const codeHtml = `
<!DOCTYPE html>
<html lang="pt-br">  
<head><!-- métadados -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nome do Site</title>
</head> 
<body>
    <!-- conteúdo do site -->
</body>
</html>
`;
	const codeBody = "<body><!-- Conteudo --></body>";
	const codeHtml1 = "<html><!-- Conteudo --></html>";

	return (
		<div className="flex-1 flex-grow-[8] ">
			<Subtitle title={"👨‍💻 HTML e CSS Básico"} />
			<Title className="mt-5">Introdução</Title>
			<p>Bem-vindo a documentação do site para Aprendizagem em HTMl e CSS.</p>
			<p>
				Nesse tutorial, aparentemente simples em termos de tecnologias
				utilizadas, abordaremos somente HTML, CSS e um pouco de Javascript.
			</p>
			<div className="flex gap-4 flex-wrap [&>div]:flex-1 mt-4 pt-4  border-t border-gray-100 max-xl:flex-col [&>h2]:mt-4 items-start">
				<BlockText>
					<Title type="h2">Estrutura Básica</Title>
					<p>
						A estrutura básica de um site é composta pela tag{" "}
						<Code content={"<HTML>"} />, que envolve todo o conteúdo da página.
						Dentro dela, encontramos duas seções principais: a tag{" "}
						<Code content={"<head>"} /> e a tag <Code content={"<body>"} />.
					</p>
					<CodeBlock title="Index.html" code={codeHtml} language="htmlbars" />

					<Title type="h2"> Html</Title>
					<p>
						{" "}
						A tag <Code content={"<HTML>"} /> é a raiz do documento HTML. Ela
						indica ao navegador que o conteúdo dentro dela é um documento HTML.
						Todos os outros elementos HTML devem estar aninhados dentro desta
						tag.
					</p>

					<CodeBlock code={codeHtml1} language="htmlbars" />

					<Title type="h2"> Head</Title>
					<p>
						{" "}
						A tag <Code content={"<head>"} /> contém metadados sobre o
						documento, como o título da página, links para folhas de estilo,
						scripts e outras informações que não são exibidas diretamente na
						página. Aqui estão alguns elementos comuns dentro da tag{" "}
						<Code content={"<head>"} />:
					</p>

					<Title type="h2"> Body</Title>
					<p>
						{" "}
						A tag <Code content={"<body>"} />
						contém todo o conteúdo visível da página, ou seja, tudo o que será
						exibido ao usuário. Aqui são inseridos os elementos como texto,
						imagens, vídeos, links, formulários e muito mais. Alguns elementos
						comuns dentro da tag <Code content={"<body>"} /> incluem:
						<br />
					</p>

					<ul className="flex flex-col gap-4 list-disc [&>li]:ml-7">
						<li>
							<Code content={"<h1>"} />a <Code content={"<h6>"} />: Tags de
							cabeçalho que definem títulos e subtítulos, onde{" "}
							<Code content={"<h1>"} /> é o mais importante e{" "}
							<Code content={"<h6>"} /> o menos importante.
						</li>
						<li>
							<Code content={"<p>"} />: Define um parágrafo de texto.
						</li>
						<li>
							<Code content={"<img>"} />: Insere uma imagem na página.
						</li>
						<li>
							<Code content={"<a>"} />: Cria um link para outra página ou
							recurso.
						</li>
						<li>
							<Code content={"<div>"} />: Define uma divisão ou seção no
							documento, usada para agrupar elementos e aplicar estilos.
						</li>
						<li>
							<Code content={"<span>"} />: Usado para agrupar texto ou outros
							elementos inline.
						</li>
						<li>
							<Code content={"<ul>"} /> e <Code content={"<ol>"} />: Criam
							listas não ordenadas e ordenadas, respectivamente.
						</li>
						<li>
							<Code content={"<li>"} />: Define um item de lista
						</li>
					</ul>
				</BlockText>
			</div>
		</div>
	);
}

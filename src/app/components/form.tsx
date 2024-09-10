import Button from "./button";
import Input from "./input";

export default function Form() {
	return (
		<form>
			<div className="flex [&>*]:flex-auto [&>*]:basis-[48%]  flex-wrap gap-6 max-w-4xl mb-6">
				<Input placeholder="Nome" iconName="Person" />
				<Input placeholder="Sobrenome" iconName="Person" />
				<Input placeholder="Telefone" type="tel" iconName="Phone" />
				<Input placeholder="Email" type="email" iconName="Mailbox" />
				<textarea
					placeholder="Mensagem"
					className="p-3 rounded-xl outline-green-500 min-h-32"
				/>
			</div>

			<Button title={"Enviar Mensagem"} type={"submit"} typeOf="primary" />
		</form>
	);
}

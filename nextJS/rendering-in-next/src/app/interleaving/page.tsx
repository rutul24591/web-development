import ClientComponentOne from '@/components/client-component-one';
import ServerComponentOne from '@/components/server-component-one';

const Interleaving = () => {
	return (
		<>
			<h1>Interleaving</h1>
			<ClientComponentOne>
				<ServerComponentOne />
			</ClientComponentOne>
		</>
	);
};

export default Interleaving;

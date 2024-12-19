import './App.css';
import { TrpcProvider } from './lib/trcp.tsx';
import { AllIdeasPage } from './pages/AllIdeasPage/index.tsx';

export const App = () => {
	return (
		<TrpcProvider>
			<AllIdeasPage />
		</TrpcProvider>
	);
};

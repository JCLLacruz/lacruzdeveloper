import BackgroundLorem from '@/components/BackgroundLorem/BackgroundLorem';
import Introduction from '@/components/Introduction/Introduction';
import Logo from '@/components/Logo/Logo';
import Section from '@/components/Section/Section';

export default function Home() {
	return (
		<main>
			<Logo subtitle={true} image={true} />
			<Section>
				<Introduction />
			</Section>
		</main>
	);
}

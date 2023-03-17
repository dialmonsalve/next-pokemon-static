import { FC, ReactNode, useEffect, useState } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
	children: ReactNode;
	title: string;
}

// const origin =(typeof window === 'undefined' ) ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

	const [origin, setOrigin] = useState('');

	useEffect(() => {
		setOrigin(window.location.origin);
	}, [])


	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name='author' content="Diego Monsalve" ></meta>
				<meta name='description' content={`Información sobre Pokémon ${title}`}></meta>
				<meta name='keywords' content={`${title}, pokemon, pokedex`} ></meta>

				<meta property={`og:title" content="Información sobre ${title}`} />
				<meta property="og:description" content={`Esta es la info de ${title}`} />
				<meta property="og:image" content={`${origin}/img/banner.png `} />
			</Head>

			<Navbar />

			<main style={{
				padding: '0px 20px'
			}}>
				{children}
			</main>
		</>
	)
}

import { useEffect, useState } from 'react';
import { FavoritePokemons } from '../../components/pokemons';
import { Layout } from '../../components/layout';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utilities';

const FavoritesPage = () => {

	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons())
	}, [])

	return (
		<Layout title='Pokemons - Favoritos' >
			{
				favoritePokemons.length === 0
					? (<NoFavorites />)
					: (<FavoritePokemons pokemons={favoritePokemons} />)
			}
		</Layout>
	)
}

export default FavoritesPage

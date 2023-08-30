import React from 'react';

const Search = ({ search, setSearch }) => {
	return (
		<div class="search">
			<h2>Pesquisar</h2>
			<input
				className="inpSearch"
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Pesquise..."
			/>
		</div>
	);
};

export default Search;

const Filter = ({ filter, setFilter, setSort }) => {
	return (
		<div className="filter">
			<h2>Filtrar:</h2>
			<div className="filter-options">
				<div>
					<p>Status</p>
					<select
						className="comp"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
					>
						<option value="All">Todas</option>
						<option value="Completed">Completas</option>
						<option value="Incomplete">Incompletas</option>
					</select>
				</div>
				<div>
					<p>Ordem alfabética:</p>
					<div className="sort">
						<button className="asc" onClick={() => setSort('Asc')}>
							Asc
						</button>
						<button
							className="desc"
							onClick={() => setSort('Desc')}
						>
							Desc
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;

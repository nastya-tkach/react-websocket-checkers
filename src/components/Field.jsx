import Cell from './Cell';
import './Field.css';

export const Field = (props) => {
	console.log('FIELD', props)

	return (
		<section className='field-wrap'>
			{props.data.user === 1 ? 
				<ul className='markup-num'>
					<li>8</li>
					<li>7</li>
					<li>6</li>
					<li>5</li>
					<li>4</li>
					<li>3</li>
					<li>2</li>
					<li>1</li>
				</ul>
			: props.data.user === 2 ?
				<ul className='markup-num'>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
					<li>7</li>
					<li>8</li>
				</ul>
			: ''
			}


			<ul className={`field-ul ${props.data.user === 2 ? 'rotate180' : ''}`}>
				{
					props.data.field.cells.map((cell, i) => 
						<Cell 
							key={i} 
							cell={cell} 
							data={props.data} 
							onHighlightTarget={props.onHighlightTarget} 
							onHandleDrop={props.onHandleDrop} 
						/>)
				}
			</ul>

			{props.data.user === 1 ?
				<ul className='markup-char'>
					<li></li>
					<li>a</li>
					<li>b</li>
					<li>c</li>
					<li>d</li>
					<li>e</li>
					<li>f</li>
					<li>g</li>
					<li>h</li>
				</ul>
			: props.data.user === 2 ?
				<ul className='markup-char'>
					<li></li>
					<li>h</li>
					<li>g</li>
					<li>f</li>
					<li>e</li>
					<li>d</li>
					<li>c</li>
					<li>b</li>
					<li>a</li>
				</ul>
			: ''
			}	

			<div>
				<p>You play with <b>{props.data.user === 1 ? 'white' : props.data.user === 2 ? 'black' : ''}</b> checkers</p>
				<p><b>{props.data.field.whoseMove === 1 ? 'White' : props.data.field.whoseMove === 2 ? 'Black' : ''}</b>'s move</p>
				<p>To connect to the game your opponent should copy this link:</p>
				<p className='connecting-link'>{`${window.location.host}/?id=${props.data.field.gameId}`}</p>

				{
					(props.data.field.whoseWin !== 0 && props.data.field.whoseWin !== undefined) ?
					<div>
						<h2>{props.data.field.whoseWin === 1 ? 'White' : 'Black'}'s victory</h2>
					</div> 
					: ''
				}
			</div>


		</section>
	)
};
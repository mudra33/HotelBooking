import React, { useState } from 'react';
import PropagateLoader from 'react-spinners/BeatLoader';

function Loader() {
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState('#ffffff');

	return (
		<div style={{ marginTop: '150px' }}>
			<div className='sweet-loading text-center'>
				<PropagateLoader color='#6d28d9' loading={loading} css='' size={25} />
			</div>
		</div>
	);
}

export default Loader;

import React from 'react';
import Image from 'next/image';

// Define the interface for the props
interface DirectorBoxProps {
	director: {
		name: string;
		position: string;
		bio: string;
		image: string;
		about: string;
	};
}

const DirectorBox: React.FC<DirectorBoxProps> = ({ director }) => {
	return (
			<div className="director-box box-item">
				<div className="box-overlay scroll">
					<h4 className="box-title">
						{director.name}
						<span>{director.position}</span>
					</h4>
					<p className="box-text">{director.bio}</p>
				</div>
				<Image className="img-fluid" src={director.image} alt={director.name} width={200} height={1000} />
				<h4 className="box-title">
					{director.name}
					<span>{director.position}</span>
				</h4>
				<p className="box-text">{director.about}</p>
			</div>
			
	);
};

export default DirectorBox;

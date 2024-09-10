import { FC } from 'react';
import './Introduction.scss';

const Introduction: FC = () => {
	return (
		<div id='introduction'>
			<div id='header-title'>
				<h1>
					Lacruz
					<span id='header-subtitle'>Developer</span>
				</h1>
			</div>
            <div id='subtitle'>
                <h2>
                    Devious, meticulous, not obvious.
                </h2>
            </div>
		</div>
	);
};

export default Introduction;

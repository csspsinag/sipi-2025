import { inlinePositioning, type Props } from 'tippy.js';

export const paragraphTippyOptions: Partial<Props> = {
	delay: [200, 0],
	duration: [200, 200],
	animation: 'shift-away-subtle',
	hideOnClick: false,
	plugins: [inlinePositioning],
	role: 'tooltip'
};

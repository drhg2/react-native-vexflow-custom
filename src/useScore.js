import ReactNativeSVGContext from './ReactNativeSVGContext';
import FontPack from './NotoFontPack';
import Vex from 'vexflow';

const useScore = ({
	contextSize = { x: 300, y: 300 },
	staveOffset = { x: 5, y: 5 },
	staveWidth,
	clef = 'treble',
	timeSig = '4/4',
	keySig = 'C'
}) => {
	const context = new ReactNativeSVGContext(FontPack, {
		width: contextSize.x,
		height: contextSize.y,
	});
	const stave = new Vex.Flow.Stave(staveOffset.x, staveOffset.y, staveWidth, {fill_style: '#000000', spacing_between_lines_px: 12});
	stave.setContext(context);
	stave.setClef(clef);
	stave.setTimeSignature(timeSig);
	stave.draw();

	return [context, stave];
};

export default useScore;

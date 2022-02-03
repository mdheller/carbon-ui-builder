import React from 'react';

import {
	AComponentCodeUI,
	allComponents
} from '../../fragment-components';

import { getSelectedComponent, updatedState } from '../../components/fragment';

const showComponentCodeOptions = (selectedComponent: any, setComponent: any) => {
	for (let [key, component] of Object.entries(allComponents)) {
		// Find the UI for editing code props for our component
		if (selectedComponent.type === key && component.componentInfo.codeUI) {
			return <component.componentInfo.codeUI
				selectedComponent={selectedComponent}
				setComponent={setComponent} />
		}
	}
	return <AComponentCodeUI selectedComponent={selectedComponent} setComponent={setComponent} />;
};

export const CodeContextPane = ({fragment, setFragment}: any) => {
	const selectedComponent = getSelectedComponent(fragment);

	const setComponent = (component: any) => {
		setFragment({
			...fragment,
			data: updatedState(fragment.data, {
				type: 'update',
				component
			})
		});
	};

	return (
		<div className='context-pane-content'>
			{selectedComponent && showComponentCodeOptions(selectedComponent, setComponent)}
		</div>
	);
};
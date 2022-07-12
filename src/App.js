import React from 'react';
import lodash from 'lodash';
import Proptypes from 'prop-types';

function App({ title }) {
    const checkAddonWithLodashPlugin = () => {
        lodash.difference([1, 2, 3], [2, 4]);
    };

    checkAddonWithLodashPlugin();
    return (
        <div>{title}</div>
    );
}

App.propTypes = {
    title: Proptypes.string.isRequired,
};

export default App;

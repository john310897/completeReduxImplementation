# completeReduxImplementation
packages to be installed
npm install @reduxjs/toolkit
npm install react-reduc

folder structure
src->store-><store name>
src->reducers-><reducer name>

import provider from react-redux
import store

enclose <App/> with provider and pass the store
<Provider store={store}>
    <App/>
</Provider>

import useSelector from react-redux for accessing the state
import useDispatch from react-redux for actions such as adding, updating and deleting operations

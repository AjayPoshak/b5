import {combineReducers} from 'redux';
import {AddBook} from '../components/AddBook/AddBookReducer'
import {readingList} from '../components/ReadingList/Reducer'
import {SearchData} from '../components/Search/Reducer'

export default combineReducers({
  AddBook,
  readingList,
  SearchData
})

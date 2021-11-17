import React, {useState, useEffect} from 'react';
import '../styles/index.css'
import ListItem from '../components/ListItems';
import ItemForm from '../components/ItemForm';
import ItemFilter from '../components/ItemFilter';
import Modal from '../components/UI/modal/Modal';
import Button from '../components/UI/button/Button';
import { useItems } from '../hooks/useItems';
import ItemService from '../API/ItemService';
import Loader from '../components/UI/loader/Loader';
import { useFetch } from '../hooks/useFetch';
import { getPageCount} from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Items() {
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedItems = useItems(items, filter.sort, filter.query);

  const [fetchItems, isItemLoading, itemError] = useFetch( async (limit, page) => {
    const response = await ItemService.getAll(limit, page);
      setItems(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchItems(limit, page)
  }, [])

  const createItem = (newItem) => {
    setItems([...items, newItem])
    setModal(false)
  }

  const removeItem = (item) => {
    setItems(items.filter(it => it.id !== item.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchItems(limit, page)
  }

  return (
    <div className="App">
      <Button style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create User
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <ItemForm create={createItem} />
      </Modal>
      <hr style={{margin: '15px 0'}}></hr>
      <ItemFilter filter={filter} setFilter={setFilter}></ItemFilter>
      {itemError &&
        <h1> Error ${itemError} </h1>
      }
      {isItemLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader></Loader></div>
        : <ListItem remove={removeItem} items = {sortedAndSearchedItems} title="List of items 1:" />
      }
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}
      >
      </Pagination>
    </div>
  );
}

export default Items;
